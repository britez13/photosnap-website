import Link from "next/link";
import NavbarStyle from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarStyle>
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
    </NavbarStyle>
  );
};

export default Navbar;
