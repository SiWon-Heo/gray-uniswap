import { BigNumber } from "ethers";
import { ethers } from "ethers";
import { getAccountBalance, getTokenExchangeAddressFromFactory, getAccountBalanceAndSymbol } from "../utils/ethers";

export async function getEthToTokenOutputAmount(inputAmount: string, tokenAddress: string, networkId: number) {
    const [EthReserve, TokenReserve] = await getReserves(tokenAddress, networkId);
    console.log(inputAmount);
    console.log(EthReserve);
    console.log(TokenReserve);
    return getOutputAmount(ethers.utils.parseEther(inputAmount), ethers.utils.parseEther(EthReserve), ethers.utils.parseEther(TokenReserve))
}

async function getReserves(tokenAddress: string, networkId: number) {
    // const exchangeAddress = await getTokenExchangeAddressFromFactory(tokenAddress, networkId);
    const exchangeAddress = '0xE2540CA59deCDF207c8FE2cc99a660234865206b';
    const ethReserve = (await getAccountBalance(exchangeAddress)).balance;
    const tokenReserve = (await getAccountBalanceAndSymbol(exchangeAddress, tokenAddress)).balance;
    return [ethReserve, tokenReserve];
}


function getOutputAmount(inputAmount: BigNumber, inputReserve: BigNumber, outputReserve: BigNumber) {
    const inputAmountWithFee = inputAmount.mul(BigNumber.from(99));
    const numerator = inputAmountWithFee.mul(outputReserve);
    const denominator = inputReserve.mul(BigNumber.from(100)).add(inputAmount);
    console.log(ethers.utils.formatEther(numerator.div(denominator)));
    return numerator.div(denominator);
}

export function calculateSlippage(slippage: number, amount: BigNumber) {
    const offset = amount.mul(slippage).div(BigNumber.from(10000));
    const minimum = amount.sub(offset);
    const maximum = amount.add(offset);
    return {
        minimum: minimum,
        maximum: maximum
    }
}