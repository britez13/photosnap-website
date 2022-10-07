import { useContext } from "react";
import { DataContext } from "../pages/_app";
import ArrowWhite from "./ArrowWhite";
import { BetaSectionStyle, ButtonWhite, Title } from "./sharedstyles";

const BetaSection = () => {
  const value = useContext(DataContext);
  const beta = value.betaSection[0];
  return (
    <BetaSectionStyle images={beta.images}>
      <div className='wrapper'>
        <Title>{beta.title}</Title>
      </div>
      <a>
        <span>Get an invite</span>
        <ArrowWhite />
      </a>
    </BetaSectionStyle>
  );
};

export default BetaSection;
