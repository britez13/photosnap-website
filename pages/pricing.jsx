import { useContext } from "react";
import BetaSection from "../components/BetaSection";
import SharedHero from "../components/SharedHero";
import Plan from "../components/Plan";
import TableMobile from "../components/TableMobile";
import Table from "../components/Table";
import { DataContext } from "./_app";

const Pricing = () => {
  const value = useContext(DataContext);
  const heroInfo = value.sharedHero[1];

  return (
    <>
      <SharedHero heroInfo={heroInfo} />
      <Plan />
      <TableMobile />
      <Table />
      <BetaSection />
    </>
  );
};

export default Pricing;
