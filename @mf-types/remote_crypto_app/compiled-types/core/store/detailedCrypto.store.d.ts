import { DetailedCryptoInfo } from '../types/types';
type DetailedCryptoState = {
    selectedCrypto: DetailedCryptoInfo | null;
    isLoading: boolean;
    setSelectedCrypto: (crypto: DetailedCryptoInfo) => void;
    clearSelectedCrypto: () => void;
    setIsLoading: (loading: boolean) => void;
};
export declare const useDetailedCryptoStore: import("zustand").UseBoundStore<import("zustand").StoreApi<DetailedCryptoState>>;
export {};
