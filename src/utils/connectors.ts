import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
    // 1: mainnet, 4: rinkeby, 5: goerli
    supportedChainIds: [1, 5]
})