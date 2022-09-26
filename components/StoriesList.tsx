import Image from "next/image";
import { useContext } from "react";
import { DataContext } from "../pages/_app";
import StoriesListStyle from "../styles/StoriesList.styled";
import StoryItem from "./StoryItem";

const StoriesList: any = ({ stories }) => {

  return (
    <StoriesListStyle>
      {stories.map((story) => (
        <StoryItem key={story.title} story={story}></StoryItem>
      ))}
    </StoriesListStyle>
  );
};

export default StoriesList;
