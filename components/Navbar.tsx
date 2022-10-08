import Link from "next/link";
import NavbarStyle from "../styles/Navbar.styled";

const Navbar = ({openNav, setOpenNav}) => {

  
  const handleClick = () => {
    setOpenNav(prev => !prev)
  }


  return (
    <NavbarStyle className={openNav ? "active" : ""}>
      <ul>
        <li>
          <Link href='/stories'>
            <a onClick={handleClick}>Stories</a>
          </Link>
        </li>
        <li>
          <Link href='/features'>
            <a onClick={handleClick}>Features</a>
          </Link>
        </li>
        <li>
          <Link href='/pricing'>
            <a onClick={handleClick}>Pricing</a>
          </Link>
        </li>
      </ul>
      <a className='invite-button'>
        <span>Get an invite</span>
      </a>
    </NavbarStyle>
  );
};

export default Navbar;
