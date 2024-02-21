import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="#" className="logo" />
      Navbar
    </header>
  )
}

export default Header;