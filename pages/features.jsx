import SharedHero from "../components/SharedHero";
import FeaturesList from "../components/FeaturesList";
import BetaSection from "../components/BetaSection";
import { useContext } from "react";
import { DataContext } from "./_app";

const Features = () => {
  const value = useContext(DataContext);
  const heroInfo = value.sharedHero[0];
  const features = value.features;
  return (
    <>
      <SharedHero heroInfo={heroInfo} />
      <FeaturesList features={features} />
      <BetaSection />
    </>
  );
};

export default Features;
