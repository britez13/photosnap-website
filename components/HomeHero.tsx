import { useContext } from "react";
import { DataContext } from "../pages/_app";
import HomeHeroStyle from "../styles/HomeHero.styled";
import { Description, Title } from "./sharedstyles";
import ArrowWhite from "./ArrowWhite";

const HomeHero = () => {

  const value = useContext(DataContext);
  const hero = value.homeHero;
  console.log(hero)
  return (
    <HomeHeroStyle images={hero.images}>
      <div className='info'>
        <div>
          <Title>{hero.title}</Title>
          <Description>{hero.description}</Description>
          <a>Get an invite <ArrowWhite/> </a>
        </div>
      </div>
      <div className='hero'></div>
    </HomeHeroStyle>
  );
};

export default HomeHero;
