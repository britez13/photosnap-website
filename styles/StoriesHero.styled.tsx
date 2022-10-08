import styled from "styled-components";

const StoriesHeroStyle = styled.section`
  display: grid;
  position: relative;

  .hero {
    min-height: 31.7rem;
    background-image: ${(props) => `url(${props.images.mobile})`};
    background-size: cover;
    background-repeat: no-repeat;
  }

  .info {
    background-color: ${({ theme }) => theme.colors.black};
    min-height: 49.5rem;
    padding-block: 3rem;
    padding-inline: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    h3 {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;

      p {
        font-size: 1.3rem;
      }
    }

    a {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
        padding-bottom: .4rem;
        text-transform: uppercase;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-image: ${(props) => `url(${props.images.tablet})`};
    background-size: cover;
    background-repeat: no-repeat;
    height: 65rem;

    .hero {
      display: none;
    }

    .info {
      background-color: transparent;
      max-width: 38.7rem;
      padding: 0;
      margin-left: 4rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: ${(props) => `url(${props.images.desktop})`};

    .info {
      margin-left: 10rem;
      gap: 1.2rem;
    }
  }
`;

export default StoriesHeroStyle;
