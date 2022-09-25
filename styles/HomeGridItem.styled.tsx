import styled from "styled-components";

const HomeGridItemStyle = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr;

  

  .hero {
    min-height: 27.1rem;
    background-image: ${(props) => `url(${props.images.desktop})`};
    background-repeat: no-repeat;
    background-size: cover;
  }

  .info {
    background-color: black;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    height: 60rem;

    .hero {
      background-image: ${(props) => `url(${props.images.tablet})`};
      grid-column: 1/2;
    }

    /* .hero:nth-child(even) {
      grid-column: 3/4;
    } */

    .info {
      grid-column: 2/4;
    }

    /* .info:nth-child(even) {
      grid-column: 1/2;
    } */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(7, 1fr);

    .hero {
      background-image: ${(props) => `url(${props.images.desktop})`};
      grid-column: 1/5;
    }

    .hero:nth-child(even) {
        grid-column: 4/8;
    }
   
    .info {
      grid-column: 5/8;
    }

    /* .info:nth-child(even) {
      grid-column: 1/4;
    } */
  }
`;

export default HomeGridItemStyle;
