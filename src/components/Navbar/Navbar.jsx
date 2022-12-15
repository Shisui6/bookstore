import { NavLink } from 'react-router-dom';
import './Navbar.css';
import profile from '../../images/prof.png';

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="categories" className={({ isActive }) => (isActive ? 'active' : 'link')}>
          Categories
        </NavLink>
      </li>
    </ul>
    <img src={profile} alt="user" className="profile" />
  </nav>
);

export default Navbar;
