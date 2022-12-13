import { useDispatch, useSelector } from 'react-redux';
import './Categories.css';
import { statusAction, selectCategories } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const cat = useSelector(selectCategories);

  return (
    <div className="categories">
      {cat.length ? <p>{cat}</p> : ''}
      <button type="button" onClick={() => dispatch(statusAction())}>Check status</button>
    </div>
  );
};

export default Categories;
