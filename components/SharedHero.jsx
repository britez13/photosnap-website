import { Description, SharedHeroStyle, Title } from "./sharedstyles";

const SharedHero = ({ heroInfo }) => {
  return (
    <SharedHeroStyle images={heroInfo.images}>
      <div className='hero'></div>
      <div className='info'>
        <div className='wrapper'>
          <Title>{heroInfo.title}</Title>
          <Description>{heroInfo.description}</Description>
        </div>
      </div>
    </SharedHeroStyle>
  );
};

export default SharedHero;
