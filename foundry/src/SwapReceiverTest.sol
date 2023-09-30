// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "ccip/contracts/src/v0.8/ccip/interfaces/IRouterClient.sol";
import "ccip/contracts/src/v0.8/ccip/libraries/Client.sol";
import "ccip/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";
import "ccip/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

import "openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

import "v3-periphery/interfaces/ISwapRouter.sol";

import "./interfaces/ICrossSwap.sol";

contract SwapReceiver is CCIPReceiver, ICrossSwap {
    address immutable public ccipRouter;
    address immutable public uniswapRouter;

    SwapParams public lastSwapParams;

    constructor(address _ccipRouter, address _uniswapRouter) CCIPReceiver(_ccipRouter) {
        ccipRouter = _ccipRouter;
        uniswapRouter = _uniswapRouter;
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    )
        internal
        override
    {
        lastSwapParams = abi.decode(any2EvmMessage.data, (SwapParams));
    }

    function testSwap(address tokenIn, address tokenOut) external {
        uint256 amount = IERC20(tokenIn).balanceOf(address(this));

        IERC20(tokenIn).transfer(uniswapRouter, amount);

        ISwapRouter.ExactInputSingleParams memory uniswapParams = ISwapRouter.ExactInputSingleParams(
            tokenIn,
            tokenOut,
            3000,
            msg.sender,
            block.timestamp,
            amount,
            0,
            0
        );

        ISwapRouter(uniswapRouter).exactInputSingle(uniswapParams);
    }
}