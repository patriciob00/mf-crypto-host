import './styles.scss';
type Props = {
    data: {
        time: string;
        price: number;
    }[];
};
declare const CryptoPriceChart: ({ data }: Props) => import("react/jsx-runtime").JSX.Element;
export default CryptoPriceChart;
