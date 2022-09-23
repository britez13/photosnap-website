import type { AppProps } from "next/app";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Header from "../components/Header";
import GlobalStyle from "../components/globalstyles";

const theme: any = {
  colors: {
    black: "#000",
    white: "#fff",
    grey: "#DfDfDf",
  },

  breakpoints: {
    tablet: "500px",
    desktop: "900px",
  },

  hero: {
    images: {
      mobile: "./public/assets/home/mobile/create-and-share.jpg",
      tablet: "./public/assets/home/tablet/create-and-share.jpg",
      desktop: "./public/assets/home/desktop/create-and-share.jpg",
    },

    title: "Create and share your photo stories",
    description:
      " Photosnap is a platform for photographers and visual storytellers. We makeit easy to share photos, tell stories and connect with others",
    button: "Get an invite",
  },

  stories: [
    {
      images: {
        mobile: "/assets/stories/mobile/mountains.jpg",
        desktop: "/assets/stories/desktop/mountains.jpg",
      },
      title: "The Mountains",
      author: "John Appleseed",
      arrow: "/assets/shared/desktop/arrow.svg",
    },
    {
      images: {
        mobile: "/assets/stories/mobile/cityscapes.jpg",
        desktop: "/assets/stories/desktop/cityscapes.jpg",
      },
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      arrow: "/assets/shared/desktop/arrow.svg",
    },
    {
      images: {
        mobile: "/assets/stories/mobile/18-days-voyage.jpg",
        desktop: "/assets/stories/desktop/18-days-voyage.jpg",
      },
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/architecturals.jpg",
        desktop: "/assets/stories/desktop/architecturals.jpg",
      },
      title: "Story Architecturals",
      author: "Samantha Brooke",
      arrow: "/assets/shared/desktop/arrow.svg",
    },
  ],

  features: [
    {
      image: "/assets/features/desktop/responsive.svg",
      title: "100% Responsive"
    },
  ],
};

export const DataContext = createContext([]);

const value = theme.stories;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DataContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </DataContext.Provider>
    </>
  );
}
