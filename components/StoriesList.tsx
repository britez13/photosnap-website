import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "../pages/_app";
import StoriesListStyle from "../styles/StoriesList.styled";
import StoryItem from "./StoryItem";

const StoriesList: any = () => {
  const value = useContext(DataContext);

  console.log(value);

  return (
    <StoriesListStyle>
      {value.map((story) => (
        <StoryItem key={story.title} story={story}></StoryItem>
      ))}
    </StoriesListStyle>
  );
};

export default StoriesList;
