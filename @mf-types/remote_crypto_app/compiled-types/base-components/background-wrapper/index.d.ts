import { PropsWithChildren, HTMLAttributes } from 'react';
import './styles.scss';
type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
declare const BackgroundWrapper: ({ children, className, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default BackgroundWrapper;
