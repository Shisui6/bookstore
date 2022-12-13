import { useDispatch } from 'react-redux';
import './Categories.css';
import { statusAction } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <button type="button" onClick={() => dispatch(statusAction())}>Check status</button>
    </div>
  );
};

export default Categories;
