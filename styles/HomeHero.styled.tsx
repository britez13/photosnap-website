import styled from "styled-components";

const HomeHeroStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);

  .info {
    grid-row: 2/3;
    background-color: ${({ theme }) => theme.colors.black};
    min-height: 41.9rem;
    padding-inline: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }


    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 2.5rem;
      display: block;
      width: 12.8rem;
      height: 0.4rem;
      background-image: linear-gradient(
        26.57deg,
        #ffc593 0%,
        #bc7198 43.29%,
        #5a77ff 83.33%
      );
    }

    a {
      text-transform: uppercase;
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-top: 3rem;
    }

  }

  .hero {
    grid-row: 1/2;
    min-height: 29.4rem;
    background-image: ${(props) => `url(${props.images.mobile})`};
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 65rem);

    .info {
      grid-column: 1/3;
      grid-row: 1/2;
      padding-left: 5rem;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 18rem;
        display: block;
        width: 0.6rem;
        height: 30.4rem;
        background-image: linear-gradient(
          26.57deg,
          #ffc593 0%,
          #bc7198 43.29%,
          #5a77ff 83.33%
        );
      }

      div {
        max-width: 39.7rem;
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
