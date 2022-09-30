import Image from "next/image";
import FooterStyle from "../styles/FooterStyle";
import logo from "../assets/shared/desktop/logo-white.svg"
import facebook from "../assets/shared/desktop/facebook-white.svg";

const Footer = () => {
  return <FooterStyle>
    <Image src={logo} width="400px" height="100px"></Image>
    <Image src={facebook} width="400px" height="100px" ></Image>
    <div></div>
  </FooterStyle>;
}

export default Footer