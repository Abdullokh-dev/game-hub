import logo from '../../assets/logo.svg';
import './Header.css';
import ColorModeSwitch from "./ColorModeSwitch";

function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between py-3 py-md-4">
      <img src={logo} alt="#" className="logo" />
      <ColorModeSwitch />
    </header>
  )
}

export default Header;