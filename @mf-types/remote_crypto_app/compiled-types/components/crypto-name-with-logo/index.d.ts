import { CryptoInfo } from '../../core/types/types';
import './styles.scss';
declare const CryptonameWithLogo: ({ item, size }: {
    item: CryptoInfo;
    size?: "large" | "medium" | "small" | string;
}) => import("react/jsx-runtime").JSX.Element;
export default CryptonameWithLogo;
