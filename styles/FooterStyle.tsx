import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: black;
  height: 40rem;

  div {
    background-image: url("../assets/shared/desktop/instagram.svg");
    background-repeat: no-repeat;
    width: 2rem;
    height: 2rem;
    /* background-color: red; */

    &:hover {
      background-image: url("../assets/shared/desktop/facebook-white.svg");
    }
  }
`;

export default FooterStyle;
