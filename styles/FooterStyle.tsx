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
    gap: 4rem;
  }
  

`;

export default FooterStyle;
