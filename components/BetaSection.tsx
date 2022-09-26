import { useContext } from "react";
import { DataContext } from "../pages/_app";
import { BetaSectionStyle, ButtonWhite, Title } from "./sharedstyles";

const BetaSection = () => {
  const value = useContext(DataContext);
  const beta = value.betaSection[0];
  return (
    <BetaSectionStyle images={beta.images}>
      <div className='wrapper'>
        <Title>{beta.title}</Title>
      </div>
      <ButtonWhite>Get an invite</ButtonWhite>
    </BetaSectionStyle>
  );
};

export default BetaSection;
