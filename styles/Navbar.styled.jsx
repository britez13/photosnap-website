import styled from "styled-components";

const NavbarStyle = styled.nav`
  flex-grow: 1;
  display: block;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    & a {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }

  .invite-button {
    display: none;
  }

  @media (max-width: 499px) {
    /* display: none; */
    height: 0;
    transform: translateY(-10%);
    opacity: 0;
    width: 0;
    overflow: hidden;

    &.active {
      display: block;
      position: absolute;
      z-index: 3;
      left: 0;
      top: 7.1rem;
      background-color: white;
      width: 100%;
      height: 25.3rem;
      opacity: 1;
      padding-inline: 2rem;
      transform: translateY(0);
      transition-property: height, opacity;
      transition-duration: 0.7s;
      transition-timing-function: ease-in-out;

      ul {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        border-bottom: 1px solid grey;
        margin-inline: auto;
        max-width: 40rem;

        li:last-of-type {
          margin-bottom: 2rem;
        }
      }

      /* .invite-button {
        display: block;
        text-align: center;
        margin-top: 2rem;
        margin-inline: auto;
        max-width: 40rem;
      } */
    }
  }
`;

export default NavbarStyle;
