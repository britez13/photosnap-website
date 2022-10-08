import Image from "next/image";
import styled from "styled-components";
import arrow from "../assets/shared/desktop/arrow.svg";
import { DescriptionBlack, TitleBlack } from "./sharedstyles";

const Grid2 = ({ gridInfo }) => {
  return (
    <Grid2Style images={gridInfo.images}>
      <div className='image'></div>
      <div className='info'>
        <TitleBlack>{gridInfo.title}</TitleBlack>
        <DescriptionBlack>{gridInfo.description}</DescriptionBlack>
        <a>
          <span>View the stories</span>
          <Image src={arrow} width='42px' height='12px' />
        </a>
      </div>
    </Grid2Style>
  );
};

const Grid2Style = styled.div`
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
    align-items: flex-start;
    gap: 2rem;
    padding-inline: 2.5rem;

    a {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: black;
        text-align: left;
        font-weight: 700;
        transition: text-decoration 0.5s ease;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 60rem;

    .image {
      background-image: ${(props) => `url(${props.images.tablet})`};
      grid-column: 3/4;
    }

    .info {
      grid-column: 1/3;
      grid-row: 1/2;
      padding-inline: 0;
      max-width: 38.7rem;
      margin-inline: auto;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(7, 1fr);

    .image {
      background-image: ${(props) => `url(${props.images.desktop})`};
      grid-column: 4/8;
    }

    .info {
      grid-column: 1/4;
    }
  }
`;

export default Grid2;
