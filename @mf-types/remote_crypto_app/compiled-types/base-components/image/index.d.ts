import './styles.scss';
type Props = {
    size: 'large' | 'medium' | 'small';
    src: string;
    alt: string;
};
declare const Image: ({ src, alt, size }: Props) => import("react/jsx-runtime").JSX.Element;
export default Image;
