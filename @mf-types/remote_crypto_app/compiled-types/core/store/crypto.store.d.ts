import { CryptoInfo } from '../types/types';
type CryptoState = {
    cryptos: CryptoInfo[];
    setCryptos: (newList: CryptoInfo[]) => void;
};
export declare const useCryptoStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CryptoState>>;
export {};
