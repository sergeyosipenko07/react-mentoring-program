import React from 'react';

import "./index.css"

import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { ErrorBoundary } from "./ErrorBoundary"
import { Footer } from "./Footer/Footer";

export const App = () => {
    console.log('APP');
  return (
      <>
          <ErrorBoundary>
              <Header />
              <Body />
              <Footer />
          </ErrorBoundary>
      </>
  )
}
