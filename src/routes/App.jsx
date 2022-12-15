import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import BookForm from '../components/BookForm/BookForm';

const App = () => {
  const location = useLocation();

  return (
    <div className="app-cont">
      <div className="app">
        <Navbar />

        <div id="detail">
          <Outlet />
        </div>
      </div>
      {location.pathname === '/' ? <BookForm /> : ''}
    </div>
  );
};

export default App;
