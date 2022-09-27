import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
} from "../components/sharedstyles";
import Cards from "../components/cards";
import StoriesList from "../components/StoriesList";
import FeaturesList from "../components/FeaturesList";
import HomeHero from "../components/HomeHero";
import HomeGrid from "../components/HomeGrid";
import { useContext } from "react";
import { DataContext } from "./_app";

export default function Home() {
  const value = useContext(DataContext);
  const homeGrid = value.homeGrid;
  const stories = value.stories.slice(0, 4);
  const features = value.features.slice(0, 3);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description> 



         <Cards />
      </Main>  */}

      {/* <GridHero /> */}

      <HomeHero />
      <HomeGrid homeGrid={homeGrid} />
      <StoriesList stories={stories} />
      <FeaturesList features={features} />
    </>
  );
}
