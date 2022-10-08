// import type { AppProps } from "next/app";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GlobalStyle from "../components/globalstyles";
import Footer from "../components/Footer";
import { data } from "../data";
// import { Data } from "../data";

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    grey: "#DfDfDf",
  },

  breakpoints: {
    tablet: "700px",
    desktop: "1000px",
  },
};

export const DataContext = createContext([]);

const value = data;

export default function App({ Component, pageProps }) {
  return (
    <>
      <DataContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </ThemeProvider>
      </DataContext.Provider>
    </>
  );
}
