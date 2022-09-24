import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
  }
`;

export default NavbarStyle;

