import { Link } from 'react-router-dom';
import profile from '../../images/user.png';

const Navbar = () => (
  <nav>
    <div>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="categories">Categories</Link>
        </li>
      </ul>
    </div>
    <img src={profile} alt="user" />
  </nav>
);

export default Navbar;
