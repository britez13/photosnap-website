import { useContext } from "react";
import BetaSection from "../components/BetaSection";
import SharedHero from "../components/SharedHero";
import Plan from "../components/Plan";
import Table from "../components/Table";
import { DataContext } from "./_app";

const Pricing = () => {
  const value = useContext(DataContext);
  const heroInfo = value.sharedHero[1];

  return (
    <>
      <SharedHero heroInfo={heroInfo} />
      <Plan />
      {/* <Table /> */}
      <BetaSection />
    </>
  );
};

export default Pricing;
