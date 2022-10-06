import Link from "next/link";
import NavbarStyle from "../styles/Navbar.styled";

const Navbar = ({openNav}) => {
  return (
    <NavbarStyle className={openNav ? "active" : ""}>
      <ul>
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
      <a className='invite-button'>Get an invite</a>
    </NavbarStyle>
  );
};

export default Navbar;
