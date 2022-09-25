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

  homeHero: {
    images: {
      mobile: "/assets/home/mobile/create-and-share.jpg",
      tablet: "/assets/home/tablet/create-and-share.jpg",
      desktop: "/assets/home/desktop/create-and-share.jpg",
    },

    title: "Create and share your photo stories.",
    description:
      " Photosnap is a platform for photographers and visual storytellers. We makeit easy to share photos, tell stories and connect with others",
  },

  homeGrid: [
    {
      images: {
        mobile: "/assets/home/mobile/beautiful-stories.jpg",
        tablet: "/assets/home/tablet/beautiful-stories.jpg",
        desktop: "/assets/home/desktop/beautiful-stories.jpg",
      },

      title: "Beautiful stories every time",
      description:
        "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    },

    {
      images: {
        mobile: "/assets/home/mobile/designed-for-everyone.jpg",
        tablet: "/assets/home/tablet/designed-for-everyone.jpg",
        desktop: "/assets/home/desktop/designed-for-everyone.jpg",
      },

      title: "Designed for everyone",
      description:
        "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    },
  ],

  storiesHero: [
    {
      images: {
        mobile: "/assets/stories/mobile/moon-of-appalacia.jpg",
        tablet: "/assets/stories/tablet/moon-of-appalacia.jpg",
        desktop: "/assets/stories/desktop/moon-of-appalacia.jpg",
      },

      subtitle: "Last month's featured story",
      title: "Hazy full moon of Appalachia",
      date: "March 2nd 2020",
      author: "John Appleseed",
      description: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains", especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
    },
  ],

  stories: [
    {
      images: {
        mobile: "/assets/stories/mobile/mountains.jpg",
        desktop: "/assets/stories/desktop/mountains.jpg",
      },
      date: "April 16th 2020",
      title: "The Mountains",
      author: "John Appleseed",
      arrow: "/assets/shared/desktop/arrow.svg",
    },
    {
      images: {
        mobile: "/assets/stories/mobile/cityscapes.jpg",
        desktop: "/assets/stories/desktop/cityscapes.jpg",
      },
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      arrow: "/assets/shared/desktop/arrow.svg",
    },
    {
      images: {
        mobile: "/assets/stories/mobile/18-days-voyage.jpg",
        desktop: "/assets/stories/desktop/18-days-voyage.jpg",
      },
      date: "April 11th 2020",
      title: "18 Days Voyage",
      author: "Alexei Borodin",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/architecturals.jpg",
        desktop: "/assets/stories/desktop/architecturals.jpg",
      },
      date: "April 9th 2020",
      title: "Story Architecturals",
      author: "Samantha Brooke",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/world-tour.jpg",
        desktop: "/assets/stories/desktop/world-tour.jpg",
      },
      date: "April 7th 2020",
      title: "World Tour 2019",
      author: "Timothy Wagner",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/unforeseen-corners.jpg",
        desktop: "/assets/stories/desktop/unforeseen-corners.jpg",
      },
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      author: "William Malcolm",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/king-on-africa.jpg",
        desktop: "/assets/stories/desktop/king-on-africa.jpg",
      },
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      author: "Tim Hillenburg",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/trip-to-nowhere.jpg",
        desktop: "/assets/stories/desktop/trip-to-nowhere.jpg",
      },
      date: "March 21st 2020",
      title: "The Trip to Nowhere",
      author: "Felicia Rourke",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/rage-of-the-sea.jpg",
        desktop: "/assets/stories/desktop/rage-of-the-sea.jpg",
      },
      date: "March 19th 2020",
      title: "Rage of The Sea",
      author: "Mohammed Abdul",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/running-free.jpg",
        desktop: "/assets/stories/desktop/running-free.jpg",
      },
      date: "March 16th 2020",
      title: "Running Free",
      author: "Michelle",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/behind-the-waves.jpg",
        desktop: "/assets/stories/desktop/behind-the-waves.jpg",
      },
      date: "March 11th 2020",
      title: "Behind the Waves",
      author: "Lamarr Wilson",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/calm-waters.jpg",
        desktop: "/assets/stories/desktop/calm-waters.jpg",
      },
      date: "March 9th 2020",
      title: "Calm Waters",
      author: "Samantha Brooke",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/milky-way.jpg",
        desktop: "/assets/stories/desktop/milky-way.jpg",
      },
      date: "March 5th 2020",
      title: "The Milky Way",
      author: "Benjamin Cruz",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/dark-forest.jpg",
        desktop: "/assets/stories/desktop/dark-forest.jpg",
      },
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/somwarpet.jpg",
        desktop: "/assets/stories/desktop/somwarpet.jpg",
      },
      date: "March 1st 2020",
      title: "Somwarpet’s Beauty",
      author: "Michelle",
      arrow: "/assets/shared/desktop/arrow.svg",
    },

    {
      images: {
        mobile: "/assets/stories/mobile/land-of-dreams.jpg",
        desktop: "/assets/stories/desktop/land-of-dreams.jpg",
      },
      date: "February 25th 2020",
      title: "Land of Dreams",
      author: "William Malcolm",
      arrow: "/assets/shared/desktop/arrow.svg",
    },
  ],

  features: [
    {
      image: "/assets/features/desktop/responsive.svg",
      title: "100% Responsive",
      description:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      image: "/assets/features/desktop/no-limit.svg",
      title: "No Photo Upload Limit",
      description:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      image: "/assets/features/desktop/embed.svg",
      title: "Available to Embed",
      description:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    },

    {
      image: "/assets/features/desktop/custom-domain.svg",
      title: "Custom Domain",
      description:
        " With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },

    {
      image: "/assets/features/desktop/boost-exposure.svg",
      title: "Boost Your Exposure",
      description:
        "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },

    {
      image: "/assets/features/desktop/drag-drop.svg",
      title: "Drag & Drop Image",
      description:
        "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ],
};

export const DataContext = createContext([]);

const value = theme;

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
