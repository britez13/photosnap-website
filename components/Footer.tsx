import Image from "next/image";
import FooterStyle from "../styles/FooterStyle";
import logo from "../assets/shared/desktop/logo-white.svg";
import facebook from "../assets/shared/desktop/facebook-white.svg";
import { Description } from "./sharedstyles";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyle>
      <div className='wrapper'>
        <div className='links'>
          <div>
            <Image src={logo} width='170px' height='16px' />
          </div>
          <div>
            <ul>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/stories'>
                  <a>Stories</a>
                </Link>
              </li>
              <li>
                <Link href='/features'>
                  <a>Features</a>
                </Link>
              </li>
              <li>
                <Link href='/pricing'>
                  <a>Pricing</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a>Get an invite</a>
          <Description>Copyright 2019. All Rights Reserved</Description>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
