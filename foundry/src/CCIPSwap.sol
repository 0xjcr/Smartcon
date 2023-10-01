// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "ccip/contracts/src/v0.8/ccip/libraries/Client.sol";
import "ccip/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";

import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

import "v3-periphery/interfaces/ISwapRouter.sol";

contract CCIPSwap is CCIPReceiver {
    event Swap(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address sender,
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 amountOut
    );

    struct SwapParams {
        address tokenOut;
        uint256 amountOutMinimum;
        uint24 fee;
        uint160 sqrtPriceLimitX96;        
        address receiver;
    }

    address public immutable uniswapRouter;

    constructor(address _ccipRouter, address _uniswapRouter) CCIPReceiver(_ccipRouter) {
        uniswapRouter = _uniswapRouter;
    }

    receive() external payable {}

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    )
        internal
        override
    {
        SwapParams memory swapParams = abi.decode(any2EvmMessage.data, (SwapParams));

        ISwapRouter.ExactInputSingleParams memory uniswapParams = ISwapRouter.ExactInputSingleParams(
            any2EvmMessage.destTokenAmounts[0].token,
            swapParams.tokenOut,
            swapParams.fee,
            swapParams.receiver,
            block.timestamp,
            any2EvmMessage.destTokenAmounts[0].amount,
            swapParams.amountOutMinimum,
            swapParams.sqrtPriceLimitX96
        );

        uint256 amountOut = ISwapRouter(uniswapRouter).exactInputSingle(uniswapParams);

        emit Swap(
            any2EvmMessage.messageId,
            any2EvmMessage.sourceChainSelector,
            abi.decode(any2EvmMessage.sender, (address)),
            any2EvmMessage.destTokenAmounts[0].token,
            swapParams.tokenOut,
            any2EvmMessage.destTokenAmounts[0].amount,
            amountOut
        );
    }
}
