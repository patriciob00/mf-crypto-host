import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Prices from '../../pages/Prices/index.tsx';
import Dashboard from '../../pages/dashboard/index.tsx';

import './styles.scss'

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const Content = ({ className = '', ...rest }: Props) => {
  return (
    <main className={`content-wrapper ${className}`} {...rest} >
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Prices />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </main>
  )
}

export default Content;