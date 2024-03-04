import logo from '../../assets/logo.svg';
import './Header.css';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function Header({onSearch}: Props) {
  return (
    <header className="d-flex align-items-center py-3 py-md-4">
      <img src={logo} alt="#" className="logo" />
      <SearchInput onSearch={(onSearch)}/>
      <ColorModeSwitch />
    </header>
  )
}

export default Header;