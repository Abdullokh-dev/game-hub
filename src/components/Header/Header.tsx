import logo from '../../assets/logo.png';
import './Header.css';
import ColorModeSwitch from "./ColorModeSwitch";

function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between">
      <img src={logo} alt="#" className="logo" />
      <ColorModeSwitch />
    </header>
  )
}

export default Header;