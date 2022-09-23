import Image from "next/image";
import StoryItemStyle from "../styles/StoryItem.styled";

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
              <img src={story.arrow} width="50px" height="20px" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </StoryItemStyle>
  );
};

export default StoryItem;
