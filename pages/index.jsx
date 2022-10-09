import Head from "next/head";
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
        <title>Photosnap Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeHero />
      <HomeGrid homeGrid={homeGrid} />
      <StoriesList stories={stories} />
      <FeaturesList features={features} />
    </>
  );
}
