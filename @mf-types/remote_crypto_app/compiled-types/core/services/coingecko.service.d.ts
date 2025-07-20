import { CryptoInfo, DetailedCryptoInfo } from '../types/types';
export declare function getCryptoListFromCoinGecko(ids: string[]): Promise<CryptoInfo[]>;
export declare function getCryptoDetailsFromCoinGecko(id: string): Promise<DetailedCryptoInfo>;
export declare function getCryptoPriceHistoryFromCoinGecko(id: string, days?: number): Promise<[number, number][]>;
