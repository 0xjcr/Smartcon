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
        SwapParams memory swapParams = abi.decode(any2EvmMessage.data, (SwapParams));

        address tokenIn = any2EvmMessage.destTokenAmounts[0].token;
        uint256 amountIn = any2EvmMessage.destTokenAmounts[0].amount;

        IERC20(tokenIn).transfer(uniswapRouter, amountIn);

        ISwapRouter.ExactInputSingleParams memory uniswapParams = ISwapRouter.ExactInputSingleParams(
            tokenIn,
            swapParams.tokenOut,
            swapParams.fee,
            swapParams.receiver,
            block.timestamp,
            amountIn,
            swapParams.amountOutMinimum,
            swapParams.sqrtPriceLimitX96
        );

        ISwapRouter(uniswapRouter).exactInputSingle(uniswapParams);
    }
}