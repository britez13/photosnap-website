import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: black;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: min(90%, 110.4rem);
    height: 12.2rem;
    display: flex;
    justify-content: space-between;
  }

  .links {
    display: flex;
    gap: 10rem;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      a {
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
    }
  }

  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    a {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
  }
`;

export default FooterStyle;
