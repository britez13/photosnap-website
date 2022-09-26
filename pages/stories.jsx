import { useContext } from "react";
import StoriesHero from "../components/StoriesHero";
import StoriesList from "../components/StoriesList";
import { DataContext } from "./_app";

const Stories = () => {
  const value = useContext(DataContext);
  const stories = value.stories;
  return (
    <>
      <StoriesHero />
      <StoriesList stories={stories} />
    </>
  );
};

export default Stories;


