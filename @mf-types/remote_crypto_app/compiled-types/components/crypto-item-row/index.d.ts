import { CryptoInfo } from '../../core/types/types';
import './styles.scss';
type Props = {
    item: CryptoInfo;
    onClick?: (crypto: CryptoInfo) => void;
};
declare const CryptoItemRow: ({ item, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default CryptoItemRow;
