import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const App = () => (
  <div className="app-cont">
    <div className="app">
      <Navbar />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  </div>
);

export default App;
