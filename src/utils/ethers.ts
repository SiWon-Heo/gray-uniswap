import { ethers } from "ethers";
import { Factory__factory, Exchange__factory, Token__factory } from "../constants/typechain-types";
import { FACTORY_ADDRESSES } from "../constants/addresses";
import { BigNumber } from "ethers";

export function getProvider() {
    return new ethers.providers.Web3Provider(window.ethereum);
}

export function getSigner() {
    return getProvider().getSigner();
}

export function getFactoryContract(networkId: number) {
    return Factory__factory.connect(FACTORY_ADDRESSES[networkId], getSigner());
}

export function getExchangeContract(exchangeAddress: string) {
    return Exchange__factory.connect(exchangeAddress, getSigner());
}

export async function onEthToTokenSwap(inputAmount: BigNumber, outputAmount: BigNumber, tokenAddress: string, networkId: number) {
    const exchangeAddress = await getFactoryContract(networkId).getExchange(tokenAddress);
    getExchangeContract(exchangeAddress).ethToTokenSwap(outputAmount, { value: inputAmount });
}

export async function getAccountBalance(accountAddress: string) {
    const balance = await getProvider().getBalance(accountAddress);
    console.log('getAccountBalance balance:', balance);
    return {
        balance: ethers.utils.formatEther(balance),
        symbol: 'ETH'
    }
}
export async function getAccountBalanceAndSymbol(accountAddress: string, tokenAddress: string) {
    const token = Token__factory.connect(tokenAddress, getSigner());
    const symbol = await token.symbol();
    const balance = await token.balanceOf(accountAddress);
    return {
        balance: ethers.utils.formatEther(balance),
        symbol: symbol
    }
}

export async function getTokenExchangeAddressFromFactory(tokenAddress: string, networkId: number) {
    console.log('token: , networkid: ', tokenAddress, networkId);
    return getFactoryContract(networkId).getExchange(tokenAddress);
}

export function fromWei(to: BigNumber) {
    return ethers.utils.formatEther(to.toString());
}
export function toWei(to: string) {
    return ethers.utils.parseEther(to);
}