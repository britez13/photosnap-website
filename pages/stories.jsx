import Head from "next/head";
import { useContext } from "react";
import StoriesHero from "../components/StoriesHero";
import StoriesList from "../components/StoriesList";
import { DataContext } from "./_app";

const Stories = () => {
  const value = useContext(DataContext);
  const stories = value.stories;
  return (
    <>
      <Head>
        <title>Photosnap Stories</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StoriesHero />
      <StoriesList stories={stories} />
    </>
  );
};

export default Stories;


