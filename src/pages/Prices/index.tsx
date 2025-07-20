import React, { lazy } from "react";

const CryptoItemsListWithinBox = lazy(() => import("remote_crypto_app/CryptoItemsListWithinBox"));
const CryptoCardHighlight = lazy(() => import("remote_crypto_app/CryptoCardHighlight"))

import './styles.scss'

const RealTimePricesScreen = () => {

  return (
    <div className="real-time-screen">
      <CryptoItemsListWithinBox />
      <CryptoCardHighlight />
    </div>
  );
};

export default RealTimePricesScreen;