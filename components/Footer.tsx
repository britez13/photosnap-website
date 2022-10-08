import Image from "next/image";
import FooterStyle from "../styles/Footer.styled";
import logo from "../assets/shared/desktop/logo-white.svg";
import facebook from "../assets/shared/desktop/facebook.svg";
import instagram from "../assets/shared/desktop/instagram.svg";
import pinterest from "../assets/shared/desktop/pinterest.svg";
import twitter from "../assets/shared/desktop/twitter.svg";
import youtube from "../assets/shared/desktop/youtube.svg";
import { Description } from "./sharedstyles";
import Link from "next/link";
import ArrowWhite from "./ArrowWhite";

const Footer = () => {
  return (
    <FooterStyle>
      <div className='wrapper'>
        <div className='links'>
          <div className='second-wrapper'>
            <Link href='/'>
              <a>
                <Image
                  src={logo}
                  width='170px'
                  height='16px'
                  objectFit='fill'
                />
              </a>
            </Link>

            <ul className='social-media'>
              <li>
                <a>
                  <Image src={facebook} width='20px' height='20px' />
                </a>
              </li>
              <li>
                <a>
                  <Image src={youtube} width='20px' height='20px' />
                </a>
              </li>
              <li>
                <a>
                  <Image src={twitter} width='20px' height='20px' />
                </a>
              </li>
              <li>
                <a>
                  <Image src={pinterest} width='20px' height='20px' />
                </a>
              </li>
              <li>
                <a>
                  <Image src={instagram} width='20px' height='20px' />
                </a>
              </li>
            </ul>
          </div>
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
        <div className='copyright'>
          <a>
            <span>Get an invite</span>
            <ArrowWhite />
          </a>
          <Description>Copyright 2019. All Rights Reserved</Description>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
