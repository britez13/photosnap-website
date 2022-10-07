import Image from "next/image";
import StoryItemStyle from "../styles/StoryItem.styled";
import ArrowWhite from "./ArrowWhite";

const StoryItem: any = ({ story }) => {
  return (
    <StoryItemStyle images={story.images}>
      <div>
        <div className="info-wrapper">
          <h3>{story.title}</h3>
          <p>by {story.author}</p>
          <span></span>
          <div className="link-wrapper">
            <a>
              <span>Read story</span>
            </a>
            <a>
              <ArrowWhite />
            </a>
          </div>
        </div>
      </div>
    </StoryItemStyle>
  );
};

export default StoryItem;
