/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface FactoryInterface extends utils.Interface {
  functions: {
    "createExchange(address)": FunctionFragment;
    "getExchange(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createExchange" | "getExchange"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createExchange",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getExchange",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchange",
    data: BytesLike
  ): Result;

  events: {
    "NewExchange(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewExchange"): EventFragment;
}

export interface NewExchangeEventObject {
  token: string;
  exchange: string;
}
export type NewExchangeEvent = TypedEvent<
  [string, string],
  NewExchangeEventObject
>;

export type NewExchangeEventFilter = TypedEventFilter<NewExchangeEvent>;

export interface Factory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createExchange(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getExchange(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createExchange(
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getExchange(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createExchange(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getExchange(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "NewExchange(address,address)"(
      token?: PromiseOrValue<string> | null,
      exchange?: PromiseOrValue<string> | null
    ): NewExchangeEventFilter;
    NewExchange(
      token?: PromiseOrValue<string> | null,
      exchange?: PromiseOrValue<string> | null
    ): NewExchangeEventFilter;
  };

  estimateGas: {
    createExchange(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getExchange(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createExchange(
      _token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getExchange(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
