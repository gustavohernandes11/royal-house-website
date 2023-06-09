import React from "react";
import type { AppProps } from "next/app";

import "../styles/style.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
