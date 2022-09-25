import { useContext } from "react";
import { DataContext } from "../pages/_app";
import StoriesHeroStyle from "../styles/StoriesHero.styled";
import { ButtonWhite, Description, Title } from "./sharedstyles";

const StoriesHero = () => {
  const value = useContext(DataContext);
  const hero = value.storiesHero[0];

  return (
    <StoriesHeroStyle images={hero.images}>
      <div className='hero'></div>
      <div className='info'>
        <h3>{hero.subtitle}</h3>
        <Title>{hero.title}</Title>
        <div>
          <Description>{hero.date}</Description>
          <p>by {hero.author}</p>
        </div>
        <Description>{hero.description}</Description>
        <ButtonWhite>Read the story</ButtonWhite>
      </div>
    </StoriesHeroStyle>
  );
};

export default StoriesHero;
