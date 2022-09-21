import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GlobalStyle from "../components/globalstyles";

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    grey: "#DfDfDf",
  },

  breakpoints: {
    tablet: "50rem",
    desktop: "110rem",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
