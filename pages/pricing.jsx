import { useContext } from "react";
import BetaSection from "../components/BetaSection";
import SharedHero from "../components/SharedHero";
import { DataContext } from "./_app";

const Pricing = () => {

  const value = useContext(DataContext);
  const heroInfo = value.sharedHero[1];

  return (
    <>
      <SharedHero heroInfo={heroInfo} />
      <BetaSection />
    </>
  );
};

export default Pricing;


