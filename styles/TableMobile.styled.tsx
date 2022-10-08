import styled from "styled-components";

const TableMobileStyle = styled.section`
  display: block;
  padding-inline: 2.5rem;
  margin-inline: auto;
  margin-bottom: 5rem;

  h3 {
    color: black;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  .subtitle {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 0.1rem;
      width: 100%;
      margin-top: 1.5rem;
      background-color: black;
    }
  }

  .wrapper {
    padding-block: 2rem;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.1rem;
      margin-top: 1.5rem;
      background-color: #dfdfdf;
    }
  }

  .item {
    display: flex;
    justify-content: space-between;
    /* padding-right: 4rem; */

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  p {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.16rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    text-transform: uppercase;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default TableMobileStyle