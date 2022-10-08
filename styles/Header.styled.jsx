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
    padding-block: 1.3rem;
    padding-inline: 2.35rem;
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
