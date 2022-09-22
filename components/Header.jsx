import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import logo from "../public/assets/shared/desktop/logo.svg";

import HeaderStyle from "../styles/Header.styled";
import { Button } from "./sharedstyles";

const Header = () => {
  return (
    <HeaderStyle>
      <Link href='/'>
        <a>
          <Image src={logo} alt='Photosnap logo' objectFit='cover' />
        </a>
      </Link>
      <Navbar></Navbar>
      <Button>Get an invite</Button>
    </HeaderStyle>
  );
};

export default Header;
