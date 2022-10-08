import styled from "styled-components";

const NavbarStyle = styled.nav`
  flex-grow: 1;
  display: block;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    & a {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }

  a.invite-button {
    display: none;
    width: 0;
    height: 0;
  }

  @media (max-width: 499px) {
    /* display: block; */
    position: absolute;
    height: 0rem;
    /* transform: scaleY(0); */
    z-index: 4;
    width: 100%;
    overflow: hidden;
    left: 0;
    top: 7.1rem;
    padding-inline: 2rem;

    transition-property: height;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    background-color: white;

    ul {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;
      border-bottom: 1px solid grey;
      margin-inline: auto;
      max-width: 40rem;

      li:last-of-type {
        margin-bottom: 2rem;
      }
    }

    a.invite-button {
      display: block;
      text-align: center;
      margin-top: 2rem;
      margin-inline: auto;
      width: min(100%, 40rem);
      padding-block: 2.4rem;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;

      
      
    }

    &.active {
      display: block;
      position: absolute;
      z-index: 4;
      left: 0;
      top: 7.1rem;
      background-color: white;
      width: 100%;
      height: 25.3rem;
      /* opacity: 1; */
      padding-inline: 2rem;
      /* transform: scaleY(1); */
      /* transition-property: height, opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out; */

      /* ul {
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

      .invite-button {
        display: block;
        text-align: center;
        margin-top: 2rem;
        margin-inline: auto;
        width: min(100%, 40rem);
        height: 3.5rem;
      } */
    }
  }
`;

export default NavbarStyle;
