import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const App = () => (
  <>
    <Navbar />

    <div id="detail">
      <Outlet />
    </div>
  </>
);

export default App;
