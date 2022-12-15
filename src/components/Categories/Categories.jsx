import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedCategory } from '../../redux/books/books';
import './Categories.css';
import fictionImg from '../../images/fiction.jpg';
import nonFictionImg from '../../images/non-fiction1.jpg';
import dramaImg from '../../images/drama.jpg';
import poetryImg from '../../images/poetry.jpg';
import folkImg from '../../images/folk1.jpg';
import fantasyImg from '../../images/fantasy1.jpg';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setSelectedCategory(e.target.alt));
  };

  return (
    <div className="categories">
      <h2>Explore</h2>
      <div className="categories-grid">
        <div>
          <div className="cat-item">
            <Link to="/">
              <div className="cat-img-cont" aria-hidden="true" onClick={handleClick}><img src={fictionImg} alt="Fiction" /></div>
            </Link>
          </div>
          <p>Fiction</p>
        </div>
        <div>
          <div className="cat-item">
            <Link to="/">
              <div className="cat-img-cont" aria-hidden="true" onClick={handleClick}><img src={nonFictionImg} alt="Non-Fiction" /></div>
            </Link>
          </div>
          <p>Non-Fiction</p>
        </div>
        <div>
          <div className="cat-item">
            <Link to="/">
              <div className="cat-img-cont" aria-hidden="true" onClick={handleClick}><img src={dramaImg} alt="Drama" /></div>
            </Link>
          </div>
          <p>Drama</p>
        </div>
        <div>
          <div className="cat-item">
            <Link to="/">
              <div className="cat-img-cont" aria-hidden="true" onClick={handleClick}><img src={poetryImg} alt="Poetry" /></div>
            </Link>
          </div>
          <p>Poetry</p>
        </div>
        <div>
          <div className="cat-item">
            <Link to="/">
              <div className="cat-img-cont" aria-hidden="true" onClick={handleClick}><img src={folkImg} alt="Folktale" /></div>
            </Link>
          </div>
          <p>Folktale</p>
        </div>
        <div>
          <div className="cat-item">
            <Link to="/">
              <div className="cat-img-cont" aria-hidden="true" onClick={handleClick}><img src={fantasyImg} alt="Fantasy" /></div>
            </Link>
          </div>
          <p>Fantasy</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
