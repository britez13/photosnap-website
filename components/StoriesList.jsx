
import Image from "next/image";
import {stories} from "../data.ts";
import StoriesListStyle from "../styles/StoriesList.styled"



const StoriesList = () => {
  return (
    <StoriesListStyle>
      {stories.map((story) => (
        <Image src={story.images.mobile} width="400px" height="200px" key={story.title} />
      ))}
    </StoriesListStyle>
  );
}

export default StoriesList