// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

interface ICrossSwap {
    struct SwapParams {
        address tokenOut;
        uint256 amountOutMinimum;
        uint24 fee;
        uint160 sqrtPriceLimitX96;        
        address receiver;
    }
}