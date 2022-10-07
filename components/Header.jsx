import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import logo from "../public/assets/shared/desktop/logo.svg";

import HeaderStyle from "../styles/Header.styled";
import { Button } from "./sharedstyles";
import { useState } from "react";

const Header = () => {

  const [openNav, setOpenNav] = useState(false)

  const handleClick = () => {
    setOpenNav(!openNav)
  }

   const handleClickLogo = () => {
     setOpenNav(false);
   };


  return (
    <HeaderStyle>
      <Link href='/'>
        <a onClick={handleClickLogo}>
          <Image src={logo} alt='Photosnap logo' objectFit='cover' />
        </a>
      </Link>
      <Navbar openNav={openNav} setOpenNav={setOpenNav}></Navbar>
      <a className='invite-button'>Get an invite</a>

      <div onClick={handleClick} className='burger-menu'>
        <div className={openNav ? "top active" : "top"}></div>
        <div className={openNav ? "bottom active" : "bottom"}></div>
      </div>
      {/* <div className={openNav ? "overlay active" : "overlay"}></div> */}
    </HeaderStyle>
  );
};

export default Header;
