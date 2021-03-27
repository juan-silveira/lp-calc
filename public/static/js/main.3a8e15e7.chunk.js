(this["webpackJsonplp-inspector"] = this["webpackJsonplp-inspector"] || []).push([
    [0], {
        109: function(e, t, n) {},
        198: function(e) { e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]') },
        213: function(e, t, n) {},
        214: function(e, t, n) {},
        215: function(e, t, n) {},
        216: function(e, t, n) {},
        230: function(e, t) {},
        253: function(e, t) {},
        255: function(e, t) {},
        270: function(e, t) {},
        333: function(e, t) {},
        335: function(e, t) {},
        367: function(e, t) {},
        372: function(e, t) {},
        374: function(e, t) {},
        381: function(e, t) {},
        394: function(e, t) {},
        412: function(e, t) {},
        423: function(e, t) {},
        426: function(e, t) {},
        478: function(e, t, n) {},
        479: function(e, t, n) {},
        480: function(e, t, n) {},
        481: function(e, t, n) {},
        482: function(e, t, n) {},
        487: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairCodeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        488: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]') },
        489: function(e) { e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        490: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"contract BananaToken","name":"_banana","type":"address"},{"internalType":"contract BananaSplitBar","name":"_bananaSplit","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_bananaPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_multiplier","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract BananaToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"}],"name":"checkPoolDuplicate","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getPoolInfo","outputs":[{"internalType":"address","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract BananaSplitBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        491: function(e) { e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"AUTO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOMaxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUTOv2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_want","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"address","name":"_strat","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_inputAmt","type":"uint256"}],"name":"migrateToAUTOv2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerAUTOReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingAUTO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"want","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accAUTOPerShare","type":"uint256"},{"internalType":"address","name":"strat","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedWantTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_wantAmt","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]') },
        492: function(e, t, n) {},
        493: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(8),
                i = n.n(a),
                s = n(200),
                u = n.n(s),
                p = (n(213), n(14)),
                r = (n(214), n(109), n(51)),
                y = (n(215), n(216), n(1));
            var l = function(e) {
                    var t = e.callback,
                        n = e.presets;
                    return Object(y.jsx)("div", { className: "dropdown", children: Object(y.jsx)("select", { name: "contract", onChange: function(e) { t(e.target.value) }, children: n.map((function(e) { return Object(y.jsx)("option", { value: e.address, children: e.name }, e.name) })) }) })
                },
                o = n(18),
                d = n.n(o);

            function c(e) { return d.a.utils.isAddress(e) }
            var m = function(e) {
                    var t = e.placeholder,
                        n = e.label,
                        i = e.defaultValue,
                        s = e.presets,
                        u = e.callback,
                        r = Object(a.useState)(i || ""),
                        o = Object(p.a)(r, 2),
                        d = o[0],
                        m = o[1],
                        b = Object(a.useState)(!1),
                        T = Object(p.a)(b, 2),
                        f = T[0],
                        v = T[1];
                    return Object(a.useEffect)((function() {
                        if (i) {
                            var e = c(i);
                            v(e)
                        }
                        c(d) && u(d)
                    }), [i, d, u]), Object(y.jsxs)(y.Fragment, {
                        children: [Object(y.jsxs)("div", { className: "address-input-header", children: [Object(y.jsx)("label", { className: "address-input-label", children: n }), s && Object(y.jsx)(l, { callback: m, presets: s })] }), Object(y.jsx)("div", {
                            className: "address-input-container",
                            children: Object(y.jsx)("input", {
                                className: f ? "address-input" : "address-input address-input-invalid",
                                value: d,
                                placeholder: t,
                                onChange: function(e) {
                                    var t = e.target.value,
                                        n = c(t);
                                    v(n), m(t), n && u(t)
                                }
                            })
                        })]
                    })
                },
                b = n(205),
                T = (n(478), new b.a({ supportedChainIds: [56] }));
            var f = function(e) {
                var t = e.children,
                    n = e.callback,
                    i = Object(r.c)(),
                    s = i.activate,
                    u = i.active,
                    l = i.account,
                    o = i.error,
                    d = Object(a.useState)(t),
                    c = Object(p.a)(d, 2),
                    m = c[0],
                    b = c[1],
                    f = Object(a.useState)("connect-wallet-btn"),
                    v = Object(p.a)(f, 2),
                    h = v[0],
                    w = v[1];
                return Object(a.useEffect)((function() {
                    if (o && o instanceof r.a) b("Supported only BSC chain (56)."), w("connect-wallet-btn connect-wallet-btn-error");
                    else if (l) {
                        w("connect-wallet-btn");
                        var e = l.substring(0, 6) + "..." + l.substring(l.length - 4, l.length);
                        b(e), n(l)
                    } else w("connect-wallet-btn"), b(t)
                }), [l, s, u, n, t, o]), Object(y.jsx)("div", { className: "connect-wallet-container", onClick: function(e) { s(T) }, children: u ? Object(y.jsx)("p", { children: m }) : Object(y.jsx)("button", { className: h, disabled: u, children: m }) })
            };
            n(479), n(480), n(481);

            function v(e) { return e.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }
            var h = function(e) {
                var t = e.balance;
                return "tokenA" in t ? function(e) {
                    var t = e.tokenA.amount.dividedBy(Math.pow(10, e.tokenA.decimals)).toFixed(),
                        n = parseFloat(t).toFixed(2),
                        a = e.tokenB.amount.dividedBy(Math.pow(10, e.tokenB.decimals)).toFixed(),
                        i = parseFloat(a).toFixed(2);
                    return Object(y.jsxs)("div", { className: "balance-card-container", children: [Object(y.jsxs)("div", { className: "balance-card-pair-name", children: [e.tokenA.name, "/", e.tokenB.name] }), Object(y.jsxs)("div", { className: "balance-card-pair-amount", children: [n, " ", e.tokenA.name, " / ", i, " ", e.tokenB.name] }), Object(y.jsxs)("div", { className: "balance-card-pair-value", children: [v(e.worth), " USD"] })] })
                }(t) : function(e) {
                    var t = e.token.amount.dividedBy(Math.pow(10, e.token.decimals)).toFixed(),
                        n = parseFloat(t).toFixed(2);
                    return Object(y.jsxs)("div", { className: "balance-card-container", children: [Object(y.jsx)("div", { className: "balance-card-pair-name", children: e.token.name }), Object(y.jsxs)("div", { className: "balance-card-pair-amount", children: [n, " ", e.token.name] }), Object(y.jsxs)("div", { className: "balance-card-pair-value", children: [v(e.worth), " USD"] })] })
                }(t)
            };
            var w = function(e) { var t, n = e.balances; return Object(y.jsxs)("div", { className: "balance-total-container", children: [Object(y.jsx)("div", { className: "balance-total-title", children: "Total worth" }), Object(y.jsxs)("div", { className: "balance-total-value", children: [(t = parseFloat(function(e) { return e.reduce((function(e, t) { return parseFloat(t.worth) + e }), 0) }(n).toFixed(2)), t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), " USD"] })] }) };
            n(482);
            var x = function(e) { var t = e.children; return Object(y.jsx)("div", { className: "error-container", children: t }) },
                M = n(203),
                O = n.n(M),
                j = n(11),
                k = n.n(j),
                g = n(31),
                A = n(204),
                _ = n(23),
                F = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                E = "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                S = "0x0895196562C7868C5Be92459FaE7f877ED450452",
                B = "0xd7d069493685a581d27824fc46eda46b7efc0063",
                C = "0x7c9e73d4c71dae564d41f78d56439bb4ba87592f",
                P = "0x7e0c621ea9f7afd5b86a50b0942eaee68b04a61c",
                I = "0x639f18c72b6a017bdd209c161d1617c9481a1e4d",
                N = [{ name: "PancakeSwap", address: "0x73feaa1eE314F8c655E354234017bE2193C9E24E" }, { name: "ZCore Finance", address: "0x05a8ba2DEf87f8AdaF223Edcd04F7Fc82eA6aee8" },
                    { name: "RamenSwap", address: "0x97DD424B4628C8D3bD7fCf3A4e974Cebba011651" }, { name: "BitBlocks Finance", address: "0xaf7769f4347cc88ed50191eaca7c3ab380097b06" },
                    { name: "Goose Finance", address: "0xe70E9185F5ea7Ba3C5d63705784D8563017f2E57" }, { name: "Pepper Finance", address: "0xDFc263b5DD1703a44E5a15f2d65b6062919Ba74d" },
                    { name: "ApeSwap", address: "0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9" }, { name: "Brickchain", address: "0x7854Fb0EdD06a880EC8009c62b1Aa38E26F9988D" },
                    { name: "Blue Swap", address: "0xb04381026F5D4AAf0487aC4336F16E133FA5FB0a" }, { name: "SaltSwap", address: "0xB4405445fFAcF2B86BC2bD7D1C874AC739265658" },
                    // { name: "", address: "" }, { name: "", address: "" },
                    // { name: "", address: "" }, { name: "", address: "" },
                ],
                H = [{ name: "PancakeSwap", address: "0x05ff2b0db69458a0750badebc4f9e13add608c7f" }],
                L = n(32),
                D = n.n(L),
                R = n(6),
                q = n(7),
                U = n(487),
                V = n(488),
                W = n(198),
                J = function() {
                    function e(t) {
                        Object(R.a)(this, e), this.web3 = void 0, this.exchangeContract = void 0, this.exchangeFactoryAddress = "", this.exchangeRouterAddress = void 0;
                        var n = new d.a.providers.HttpProvider("https://bsc-dataseed3.ninicoin.io/", { timeout: 12e4 });
                        this.web3 = new d.a(n), this.exchangeContract = new this.web3.eth.Contract(V, t), this.exchangeRouterAddress = t
                    }
                    return Object(q.a)(e, [{
                        key: "getEquivalentToken",
                        value: function() {
                            var e = Object(_.a)(k.a.mark((function e(t, n, a) {
                                var i, s, u, r;
                                return k.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getReserves(t, n);
                                        case 2:
                                            return i = e.sent, s = Object(p.a)(i, 2), u = s[0], r = s[1], e.abrupt("return", this.exchangeContract.methods.getAmountOut(a, u, r).call());
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n, a) { return e.apply(this, arguments) }
                        }()
                    }, {
                        key: "getReserves",
                        value: function() {
                            var e = Object(_.a)(k.a.mark((function e(t, n) {
                                var a, i, s, u, p, r, y;
                                return k.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.exchangeFactoryAddress) { e.next = 4; break }
                                            return e.next = 3, this.exchangeContract.methods.factory().call();
                                        case 3:
                                            this.exchangeFactoryAddress = e.sent;
                                        case 4:
                                            return a = new this.web3.eth.Contract(U, this.exchangeFactoryAddress), e.next = 7, a.methods.getPair(t, n).call();
                                        case 7:
                                            return i = e.sent, s = new this.web3.eth.Contract(W, i), e.next = 11, s.methods.getReserves().call();
                                        case 11:
                                            return u = e.sent, p = u[0], r = u[1], e.next = 16, s.methods.token0().call().then((function(e) { return e.toLowerCase() }));
                                        case 16:
                                            return y = e.sent, e.abrupt("return", [y === t ? p : r, y === t ? r : p]);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) { return e.apply(this, arguments) }
                        }()
                    }]), e
                }();

            function z(e) { return d.a.utils.fromWei(e) }
            var Y = n(198),
                G = n(489),
                Z = ["0x55d398326f99059ff775485246999027b3197955", E];

            function Q(e, t) { return K.apply(this, arguments) }

            function K() {
                return (K = Object(_.a)(k.a.mark((function e(t, n) {
                    var a;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = new t.eth.Contract(Y, n.lpAddress), e.prev = 1, e.next = 4, a.methods.getReserves().call();
                            case 4:
                                return e.abrupt("return", !0);
                            case 7:
                                return e.prev = 7, e.t0 = e.catch(1), e.abrupt("return", !1);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))).apply(this, arguments)
            }

            function X(e, t, n) { return $.apply(this, arguments) }

            function $() {
                return ($ = Object(_.a)(k.a.mark((function e(t, n, a) {
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Q(t, n);
                            case 2:
                                if (!e.sent) { e.next = 7; break }
                                return e.abrupt("return", ee(t, n, a));
                            case 7:
                                return e.abrupt("return", ne(t, n, a));
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ee(e, t, n) { return te.apply(this, arguments) }

            function te() {
                return (te = Object(_.a)(k.a.mark((function e(t, n, a) {
                    var i, s, u, p, r, y, l, o, d, c, m, b, T, f, v, h, w, x, M, O, j, A, _, S, B, C, P, I, N;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = new t.eth.Contract(Y, n.lpAddress), e.next = 3, i.methods.totalSupply().call();
                            case 3:
                                return s = e.sent, e.next = 6, i.methods.getReserves().call();
                            case 6:
                                return u = e.sent, p = u[0], r = u[1], y = new D.a(n.balance).dividedBy(s).multipliedBy(p), l = new D.a(n.balance).dividedBy(s).multipliedBy(r), e.next = 13, i.methods.token0().call().then((function(e) { return e.toLowerCase() }));
                            case 13:
                                return o = e.sent, d = new t.eth.Contract(G, o), e.next = 17, d.methods.symbol().call();
                            case 17:
                                return c = e.sent, e.next = 20, d.methods.decimals().call();
                            case 20:
                                return m = e.sent, e.next = 23, i.methods.token1().call().then((function(e) { return e.toLowerCase() }));
                            case 23:
                                return b = e.sent, T = new t.eth.Contract(G, b), e.next = 27, T.methods.symbol().call();
                            case 27:
                                return f = e.sent, e.next = 30, T.methods.decimals().call();
                            case 30:
                                if (v = e.sent, h = "0", -1 !== Z.indexOf(o) || -1 !== Z.indexOf(b)) { e.next = 54; break }
                                if (w = new J(a), o !== F && b !== F) { e.next = 44; break }
                                return x = o === F ? o : b, M = o === F ? y : l, e.next = 39, w.getEquivalentToken(x, E, M.integerValue().toFixed());
                            case 39:
                                O = e.sent, j = new D.a(2).multipliedBy(O).integerValue().toFixed(), h = parseFloat(z(j)).toFixed(2), e.next = 52;
                                break;
                            case 44:
                                return A = Z.indexOf(o) > -1 ? o : b, S = (_ = A === o ? b : o) === o ? y : l, e.next = 49, w.getEquivalentToken(_, A, S.integerValue().toFixed());
                            case 49:
                                B = e.sent, C = new D.a(2).multipliedBy(B).integerValue().toFixed(), h = parseFloat(z(C)).toFixed(2);
                            case 52:
                                e.next = 58;
                                break;
                            case 54:
                                P = Z.indexOf(o) > -1 ? o : b, I = o === P ? y : l, N = new D.a(2).multipliedBy(I).integerValue().toFixed(), h = parseFloat(z(N)).toFixed(2);
                            case 58:
                                return e.abrupt("return", Object(g.a)(Object(g.a)({}, n), {}, { tokenA: { name: c, amount: y, decimals: m }, tokenB: { name: f, amount: l, decimals: v }, worth: h }));
                            case 59:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function ne(e, t, n) { return ae.apply(this, arguments) }

            function ae() {
                return (ae = Object(_.a)(k.a.mark((function e(t, n, a) {
                    var i, s, u, r, y, l, o, d, c, m, b, T, f;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = new t.eth.Contract(G, n.lpAddress), e.next = 3, i.methods.symbol().call();
                            case 3:
                                return s = e.sent, e.next = 6, i.methods.decimals().call();
                            case 6:
                                if (u = e.sent, r = n.balance, y = { name: s, amount: new D.a(r), decimals: u }, l = "0", o = [B, I].indexOf(n.lpAddress.toLowerCase()) > -1 ? F : n.lpAddress.toLowerCase(), !([E, C, P].indexOf(o) > -1)) { e.next = 15; break }
                                l = parseFloat(z(n.balance)).toFixed(2), e.next = 24;
                                break;
                            case 15:
                                return d = new J(a), e.next = 18, d.getReserves(o, E);
                            case 18:
                                c = e.sent, m = Object(p.a)(c, 2), b = m[0], T = m[1], f = new D.a(T).div(b).multipliedBy(r).integerValue().toFixed(), l = parseFloat(z(f)).toFixed(2);
                            case 24:
                                return e.abrupt("return", Object(g.a)(Object(g.a)({}, n), {}, { token: y, worth: l }));
                            case 25:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var ie = n(490),
                se = n(491);

            function ue() {
                return (ue = Object(_.a)(k.a.mark((function e(t, n, a, i) {
                    var s, u, p, r, y, l, o, c, m, b;
                    return k.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a) { e.next = 2; break }
                                return e.abrupt("return");
                            case 2:
                                if (i) { e.next = 4; break }
                                return e.abrupt("return");
                            case 4:
                                return s = new d.a.providers.HttpProvider("https://bsc-dataseed3.ninicoin.io/", { timeout: 12e4 }), u = new d.a(s), p = new u.eth.Contract(se, i), r = new u.eth.Contract(ie, i), e.next = 10, r.methods.poolLength().call();
                            case 10:
                                return y = e.sent, e.next = 13, Promise.all(Object(A.a)(Array(parseInt(y))).map((function(e, t) { return i === S ? t ? p.methods.stakedWantTokens(t, a).call() : "0" : r.methods.userInfo(t, a).call() })));
                            case 13:
                                return l = e.sent, o = l.map((function(e, t) { return { pool: t, balance: i === S ? e : e[0] } })).filter((function(e) { return "0" !== e.balance })), e.next = 17, Promise.all(o.map(function() {
                                    var e = Object(_.a)(k.a.mark((function e(t) {
                                        var n, a;
                                        return k.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, r.methods.poolInfo(t.pool).call();
                                                case 2:
                                                    return n = e.sent, a = n[0], e.abrupt("return", Object(g.a)(Object(g.a)({}, t), {}, { lpAddress: a }));
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) { return e.apply(this, arguments) }
                                }()));
                            case 17:
                                return c = e.sent, m = c.map(function() {
                                    var e = Object(_.a)(k.a.mark((function e(n) {
                                        return k.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.abrupt("return", X(u, n, t));
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) { return e.apply(this, arguments) }
                                }()), e.next = 21, Promise.all(m);
                            case 21:
                                b = e.sent, n(b);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var pe = function(e) {
                var t = e.contractAddress,
                    n = e.routerContractAddress,
                    i = e.address,
                    s = Object(a.useState)([]),
                    u = Object(p.a)(s, 2),
                    r = u[0],
                    l = u[1],
                    o = Object(a.useState)(!1),
                    d = Object(p.a)(o, 2),
                    c = d[0],
                    m = d[1],
                    b = Object(a.useState)(0),
                    T = Object(p.a)(b, 2),
                    f = T[0],
                    v = T[1],
                    M = Object(a.useState)(!1),
                    j = Object(p.a)(M, 2),
                    k = j[0],
                    g = j[1],
                    A = Object(a.useCallback)(_, [i, t, n]);

                function _() {
                    m(!0), g(!1), O()((function(e, a) {
                        return v(a - 1),
                            function(e, t, n, a) { return ue.apply(this, arguments) }(n, l, i, t).catch((function(t) { console.log(t), t.message.indexOf("Invalid JSON RPC response") > -1 ? e(t) : t.message.indexOf("the correct ABI for the contract") > -1 && g(!0) }))
                    })).finally((function() { m(!1) }))
                }
                return Object(a.useEffect)((function() { A() }), [A]), Object(y.jsxs)("div", { className: "balance-details-container", children: [Object(y.jsxs)("h2", { children: ["Staking Details", " ", !c && Object(y.jsx)("button", { onClick: _, children: "Refresh" })] }), Object(y.jsx)("div", { className: "balance-details-content-container", children: function() { var e = r.map((function(e) { return Object(y.jsx)(h, { balance: e }, e.lpAddress) })); return c ? Object(y.jsxs)("p", { className: "balance-details-status", children: ["Fetching data from the staking pool...", " ", f ? Object(y.jsxs)("span", { children: ["(Retry: ", f, ")"] }) : ""] }) : k ? Object(y.jsx)(x, { children: "Invalid Contract" }) : 0 === e.length ? Object(y.jsx)("p", { className: "balance-details-status", children: "There're no LPs in the given staking contract." }) : Object(y.jsxs)(y.Fragment, { children: [e, Object(y.jsx)(w, { balances: r })] }) }() })] })
            };
            n(492);
            var re = function(e) { return e.showDonate, Object(y.jsx)("footer", { className: "footer-container", children: Object(y.jsx)("p", { children: Object(y.jsx)("div", { className: "donate-container", children: Object(y.jsx)("a", { href: "https://github.com/juan-silveira/lp-calc/", children: "https://github.com/juan-silveira/lp-calc/" }) }) }) }) };

            function ye(e, t) { return new d.a(e) }
            var le = window;
            var oe = function() {
                    var e = Object(a.useState)(""),
                        t = Object(p.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        s = Object(a.useState)("0x05ff2b0db69458a0750badebc4f9e13add608c7f"),
                        u = Object(p.a)(s, 2),
                        l = u[0],
                        o = u[1],
                        d = Object(a.useState)(le.web3 ? "" : localStorage.getItem("address") || ""),
                        c = Object(p.a)(d, 2),
                        b = c[0],
                        T = c[1],
                        v = Object(a.useState)(!1),
                        h = Object(p.a)(v, 2),
                        w = h[0],
                        x = h[1];
                    Object(a.useEffect)((function() {
                        return x("" !== n && "" !== l),
                            function() { x(!1) }
                    }), [l, n, w]);
                    var M = { textDecorationLine: "none" };
                    return Object(y.jsx)(r.b, { getLibrary: ye, children: Object(y.jsx)("div", { className: "app-container", children: Object(y.jsxs)("div", { className: "app-content-container", children: [Object(y.jsxs)("div", { className: "app-header", children: [Object(y.jsx)("a", { style: M, href: "https://github.com/juan-silveira/lp-calc/", children: Object(y.jsxs)("div", { className: "app-header-left", children: [Object(y.jsx)("img", { width: "25", height: "25", style: { marginRight: "10px" }, src: "images/calc.png" }), Object(y.jsx)("h1", { style: M, children: "LP Calculator" })] }) }), le.web3 && Object(y.jsx)(f, { callback: T, children: "Connect" })] }), b || !le.web3 ? Object(y.jsxs)(y.Fragment, { children: [!le.web3 && Object(y.jsx)(m, { placeholder: "Enter your address", label: "Your address", defaultValue: b, callback: function(e) { T(e), localStorage.setItem("address", e) } }), Object(y.jsx)(m, { placeholder: "Enter Masterchef address", label: "MasterChef address", defaultValue: "0x73feaa1eE314F8c655E354234017bE2193C9E24E", presets: N, callback: i }), Object(y.jsx)(m, { placeholder: "Enter Router address", label: "Router address (default to Pancakeswap)", defaultValue: l, presets: H, callback: o }), Object(y.jsx)("div", { className: "app-details-section", children: w ? Object(y.jsx)(pe, { address: b, contractAddress: n, routerContractAddress: l }) : Object(y.jsx)("p", { children: "Fill contract addresses above to see details here." }) })] }) : Object(y.jsx)("p", { className: "app-connect-wallet-first", children: "Connect wallet to use the app." }), Object(y.jsx)(re, { showDonate: "" !== b })] }) }) })
                },
                de = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 497)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            i = t.getFCP,
                            s = t.getLCP,
                            u = t.getTTFB;
                        n(e), a(e), i(e), s(e), u(e)
                    }))
                };
            u.a.render(Object(y.jsx)(i.a.StrictMode, { children: Object(y.jsx)(oe, {}) }), document.getElementById("root")), de()
        }
    },
    [
        [493, 1, 2]
    ]
]);