import { CSSProperties, PropsWithChildren } from 'react';
import './styles.scss';
type Props = PropsWithChildren<{
    size?: 'large' | 'medium' | 'small';
    style?: CSSProperties;
}>;
declare const Title: ({ children, size, style }: Props) => import("react/jsx-runtime").JSX.Element;
export default Title;
