import { CryptoInfo } from '../../core/types/types';
import './styles.scss';
type Props = {
    items: CryptoInfo[];
    onItemClick?: (item: CryptoInfo) => void;
};
declare const CryptoItemsList: ({ items, onItemClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default CryptoItemsList;
