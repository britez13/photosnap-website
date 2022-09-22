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

  hero: {
    imgafes: {
      mobile: "./public/assets/home/mobile/create-and-share.jpg",
      tablet: "./public/assets/home/tablet/create-and-share.jpg",
      desktop: "./public/assets/home/desktop/create-and-share.jpg",
    },

    title: "Create and share your photo stories",
    description:
      " Photosnap is a platform for photographers and visual storytellers. We makeit easy to share photos, tell stories and connect with others",
    button: "Get an invite",
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
