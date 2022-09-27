import styled from "styled-components";
import { DescriptionBlack, TitleBlack } from "./sharedstyles";

const Grid1 = ({gridInfo}) => {

    console.log(gridInfo)
  return (
    <Grid1Style images={gridInfo.images}>
      <div className='image'></div>
      <div className='info'>
        <TitleBlack>{gridInfo.title}</TitleBlack>
        <DescriptionBlack>{gridInfo.description}</DescriptionBlack>
      </div>
    </Grid1Style>
  );};

const Grid1Style = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr;

  .image {
    min-height: 27rem;
    background-image: ${(props) => `url(${props.images.mobile})`};
    background-size: cover;
    background-repeat: no-repeat;
  }

  .info {
    min-height: 41.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-inline: 2.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);

    .image {
      background-image: ${(props) => `url(${props.images.tablet})`};
      grid-column: 1/2;
      min-height: 60rem;
    }

    .info {
      grid-column: 2/4;
      padding-inline: 0;
      max-width: 38.7rem;
      margin-inline: auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(7, 1fr);

    .image {
      background-image: ${(props) => `url(${props.images.desktop})`};
      grid-column: 1/5;
    }

    .info {
      grid-column: 5/8;
    }
  }
`;

export default Grid1;






