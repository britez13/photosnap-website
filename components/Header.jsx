import Image from "next/image";
import logo from "../public/assets/shared/desktop/logo.svg";
import HeaderStyle from "../styles/Header.styled";

const Header = () => {
  return (
    <HeaderStyle>
      <Image src={logo} alt='Photosnap logo' objectFit='cover' />
      <nav>X</nav>
    </HeaderStyle>
  );
};

export default Header;
