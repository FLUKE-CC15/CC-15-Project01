import { FaHome } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';
import "./Header.scss";
function Header (){
    return <header className="header">
    {/* Logo */}
    <div className="header__logo">
      <FaHome />
    </div>

    {/* Text */}
    <div className="header__text">
      <h3>Todolist</h3>
    </div>

    {/* Search */}
    <div className='search'>
    <span className='search__icon'>
        <FaSearch />
    </span>
    <input type='text' className='search__input' placeholder='search' />
</div>
  </header>
}
export default Header;