import { useContext } from "react";
import BetaSection from "../components/BetaSection";
import SharedHero from "../components/SharedHero";
import Plan from "../components/Plan";
import TableMobile from "../components/TableMobile";
import Table from "../components/Table";
import { DataContext } from "./_app";
import Head from "next/head";

const Pricing = () => {
  const value = useContext(DataContext);
  const heroInfo = value.sharedHero[1];

  return (
    <>
      <Head>
        <title>Photosnap Pricing</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SharedHero heroInfo={heroInfo} />
      <Plan />
      <TableMobile />
      <Table />
      <BetaSection />
    </>
  );
};

export default Pricing;
