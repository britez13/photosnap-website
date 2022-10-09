import SharedHero from "../components/SharedHero";
import FeaturesList from "../components/FeaturesList";
import BetaSection from "../components/BetaSection";
import { useContext } from "react";
import { DataContext } from "./_app";
import Head from "next/head";

const Features = () => {
  const value = useContext(DataContext);
  const heroInfo = value.sharedHero[0];
  const features = value.features;
  return (
    <>
      <Head>
        <title>Photosnap Features</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SharedHero heroInfo={heroInfo} />
      <FeaturesList features={features} />
      <BetaSection />
    </>
  );
};

export default Features;
