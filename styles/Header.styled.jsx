import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 7.2rem !important;
  width: min(90%, 110rem) !important;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  background-color: white;

  .invite-button {
    display: none;
    font-size: 1.2rem;
    font-size: 700;
    text-transform: uppercase;
    background-color: black;
    color: white;
    padding-block: 1rem;
    padding-inline: 2rem;
    letter-spacing: 0.2rem;
    cursor: pointer;
  }

  .burger-menu {
    display: block;
    position: absolute;
    right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    z-index: 10;

    .top,
    .bottom {
      width: 2rem;
      height: 0.1rem;
      background-color: black;
      transform: rotate(0) translateY(0);
      transition: transform 0.4s ease-in-out;
    }

    .top.active {
      transform: rotate(45deg) translateY(0.32rem);
    }

    .bottom.active {
      transform: rotate(-45deg) translateY(-0.32rem);
    }
  } 

  .overlay {
    position: absolute;
    opacity: 0;
    background-color: #000000b9;
    transition: opacity 0.3s ease-in-out;

    &.active {
      z-index: 2;
      top: 7.2rem;
      bottom: 0%;
      left: 0rem;
      right: 0rem;
      height: 600%;
      opacity: 1;
      overflow-y: hidden;
    }
  }

  

  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .invite-button {
      display: block;
    }

    .burger-menu {
      display: none;
    }

    .overlay {
      display: none;
    } 
  }
`;

export default HeaderStyle;
