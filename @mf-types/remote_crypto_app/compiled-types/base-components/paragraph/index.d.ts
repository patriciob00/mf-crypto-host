import { CSSProperties, PropsWithChildren } from 'react';
import './styles.scss';
type Props = PropsWithChildren<{
    style?: CSSProperties;
    size?: 'large' | 'medium' | 'small' | string;
}>;
declare const Paragraph: ({ children, style, size }: Props) => import("react/jsx-runtime").JSX.Element;
export default Paragraph;
