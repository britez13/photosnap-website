import styled from "styled-components";

const HomeHeroStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  .info {
    background-color: ${({ theme }) => theme.colors.black};
    min-height: 41.9rem;
    padding-inline: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero {
    min-height: 29.4rem;
    background-image: ${(props) => `url(${props.images.mobile})`};
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 65rem;

    .info {
      grid-column: 1/3;

      div {
        max-width: 39.7rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }

    .hero {
      background-image: ${(props) => `url(${props.images.tablet})`};
      grid-column: 3/4;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(7, 1fr);

    .info {
      grid-column: 1/4;
      padding-left: 10rem;
      position: relative;

      &::before {
        position: absolute;
      }


    }

    .hero {
      background-image: ${(props) => `url(${props.images.desktop})`};
      grid-column: 4/8;
    }
  }
`;

export default HomeHeroStyle;
