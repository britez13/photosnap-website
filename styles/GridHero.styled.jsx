import styled from "styled-components";
import image from "../public/assets/home/desktop/create-and-share.jpg"


const GridHeroStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 65rem;

  div:nth-child(1) {
    grid-column: 1 / 4;
    background-color: black;

    & h1 {
        font-size: 3rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.417rem;
    }
  }

  div:nth-child(2) {
    grid-column: 4 / 8;
    background-image: url("/assets/home/desktop/create-and-share.jpg");
  }
`;

export default GridHeroStyle;


