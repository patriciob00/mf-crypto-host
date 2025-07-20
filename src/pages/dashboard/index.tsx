import React, { lazy, Suspense } from 'react'

const RemoteCryptoDashboard = lazy(() => import("remote_crypto_app/CryptoDashboard"));

const PriceHistory = () => {
  return (
    <Suspense fallback={<></>}>
      <RemoteCryptoDashboard />
    </Suspense>
  )
}

export default PriceHistory;