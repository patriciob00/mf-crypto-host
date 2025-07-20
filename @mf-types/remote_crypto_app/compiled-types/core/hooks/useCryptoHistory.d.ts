import { ChartDataPoint } from '../types/types';
export declare function useCryptoHistory(id: string, days?: number): {
    history: ChartDataPoint[];
    loading: boolean;
};
