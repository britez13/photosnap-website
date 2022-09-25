import HomeGridItemStyle from "../styles/HomeGridItem.styled";
import { Description, Title } from "./sharedstyles";

const HomeGridItem = ({ item }) => {
  return (
    <HomeGridItemStyle images={item.images}>
      <div className='hero'></div>
      <div className='info'>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </div>
    </HomeGridItemStyle>
  );
};

export default HomeGridItem;
