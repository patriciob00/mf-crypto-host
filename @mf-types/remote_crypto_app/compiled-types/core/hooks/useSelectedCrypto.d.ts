export declare function useSelectedCrypto(): {
    selectedCrypto: import("../types/types").DetailedCryptoInfo | null;
    fetchAndSelectCrypto: (id: string) => Promise<void>;
    clearSelectedCrypto: () => void;
};
