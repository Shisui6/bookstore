import { NavLink } from 'react-router-dom';
import './Navbar.css';
import profile from '../../images/user.png';
import book from '../../images/book-shelf.png';
import categories from '../../images/categories.png';

const Navbar = () => (
  <nav>
    <h1>Bookstore</h1>
    <ul>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>
          <img src={book} alt="book" className="link-img" />
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="categories" className={({ isActive }) => (isActive ? 'active' : 'link')}>
          <img src={categories} alt="menu" className="link-img" />
          Categories
        </NavLink>
      </li>
    </ul>
    <img src={profile} alt="user" className="profile" />
  </nav>
);

export default Navbar;
