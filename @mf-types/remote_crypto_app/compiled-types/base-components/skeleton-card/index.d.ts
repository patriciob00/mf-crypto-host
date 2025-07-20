import { HTMLAttributes, PropsWithChildren } from 'react';
import './styles.scss';
type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
declare const SkeletonCard: ({ children, className, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export default SkeletonCard;
