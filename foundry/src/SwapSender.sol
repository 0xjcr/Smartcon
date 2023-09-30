// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "ccip/contracts/src/v0.8/ccip/interfaces/IRouterClient.sol";
import "ccip/contracts/src/v0.8/ccip/libraries/Client.sol";
import "ccip/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";
import "ccip/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

import "./interfaces/ICrossSwap.sol";

contract SwapSender is ICrossSwap {
    address immutable public ccipRouter;

    constructor(address _ccipRouter) {
        ccipRouter = _ccipRouter;
    }

    receive() external payable {}

    function swapWithToken(
        uint64 _destinationChainSelector,
        address _receiver,
        SwapParams calldata swapParams,
        address _token,
        uint256 _amount,
        address _feeToken
    )
        external
        returns (bytes32 messageId)
    {
        // Create an EVM2AnyMessage struct in memory with necessary information for sending a cross-chain message
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            swapParams,
            _token,
            _amount,
            _feeToken
        );

        // Initialize a router client instance to interact with cross-chain router
        IRouterClient router = IRouterClient(ccipRouter);

        // Get the fee required to send the CCIP message
        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);

        // Get fee tokens from sender
        IERC20(_feeToken).transferFrom(msg.sender, address(this), fees);

        // Get tokens to swap from sender 
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        // approve the Router to transfer fee tokens on contract's behalf. It will spend the fees in some token
        IERC20(_feeToken).approve(address(router), fees);

        // approve the Router to spend tokens on contract's behalf. It will spend the amount of the given token
        IERC20(_token).approve(address(router), _amount);

        // Send the message through the router and store the returned message ID
        messageId = router.ccipSend(_destinationChainSelector, evm2AnyMessage);

        // Return the message ID
        return messageId;
    }

    function swapWithNative(
        uint64 _destinationChainSelector,
        address _receiver,
        SwapParams calldata _swapParams,
        address _token,
        uint256 _amount
    )
        external
        payable
        returns (bytes32 messageId)
    {
        // Create an EVM2AnyMessage struct in memory with necessary information for sending a cross-chain message
        // address(0) means fees are paid in native gas
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            _swapParams,
            _token,
            _amount,
            address(0)
        );

        // Initialize a router client instance to interact with cross-chain router
        IRouterClient router = IRouterClient(ccipRouter);

        // Get the fee required to send the CCIP message
        uint256 fees = router.getFee(_destinationChainSelector, evm2AnyMessage);

        require(fees <= msg.value);

        // Get tokens to swap from sender 
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        // approve the Router to spend tokens on contract's behalf. It will spend the amount of the given token
        IERC20(_token).approve(address(router), _amount);

        // Send the message through the router and store the returned message ID
        messageId = router.ccipSend{value: fees} (
            _destinationChainSelector,
            evm2AnyMessage
        );

        // Return the message ID
        return messageId;
    }

    function _buildCCIPMessage(
        address _receiver,
        SwapParams calldata _swapParams,
        address _token,
        uint256 _amount,
        address _feeTokenAddress
    ) 
        internal 
        pure 
        returns (Client.EVM2AnyMessage memory) 
    {
        // Set the token amounts
        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        Client.EVMTokenAmount memory tokenAmount = Client.EVMTokenAmount({
            token: _token,
            amount: _amount
        });

        tokenAmounts[0] = tokenAmount;
        // Create an EVM2AnyMessage struct in memory with necessary information for sending a cross-chain message
        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(_receiver),
            data: abi.encode(_swapParams),
            tokenAmounts: tokenAmounts,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 2000000})
            ),
            feeToken: _feeTokenAddress
        });
        
        return evm2AnyMessage;
    }
}