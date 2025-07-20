import React, { HTMLAttributes, lazy, PropsWithChildren } from 'react'
import { Header } from '../../components/Header';
import { BrowserRouter } from 'react-router-dom';

const BackgroundWrapper = lazy(() => import("remote_crypto_app/BackgroundWrapper"));

import './styles.scss'
import Content from '../../components/Content';

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const BaseLayout = ({ children, className = '', ...rest }: Props) => {
  return (
    <BackgroundWrapper className={`base-layout ${className}`} {...rest}>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </BackgroundWrapper>
  )
}

export default BaseLayout;