import './Categories.css';
import fictionImg from '../../images/fiction.jpg';
import nonFictionImg from '../../images/non-fiction.jpg';
import dramaImg from '../../images/drama.jpg';
import poetryImg from '../../images/poetry.jpg';
import folkImg from '../../images/folk.jpg';
import fantasyImg from '../../images/fantasy.jpg';

const Categories = () => (
  <div className="categories">
    <h2>Explore</h2>
    <div className="categories-grid">
      <div>
        <div className="cat-item"><div className="cat-img-cont"><img src={fictionImg} alt="fiction" /></div></div>
        <p>Fiction</p>
      </div>
      <div>
        <div className="cat-item"><div className="cat-img-cont"><img src={nonFictionImg} alt="non-fiction" /></div></div>
        <p>Non-Fiction</p>
      </div>
      <div>
        <div className="cat-item"><div className="cat-img-cont"><img src={dramaImg} alt="drama" /></div></div>
        <p>Drama</p>
      </div>
      <div>
        <div className="cat-item"><div className="cat-img-cont"><img src={poetryImg} alt="poetry" /></div></div>
        <p>Poetry</p>
      </div>
      <div>
        <div className="cat-item"><div className="cat-img-cont"><img src={folkImg} alt="folk" /></div></div>
        <p>Folktale</p>
      </div>
      <div>
        <div className="cat-item"><div className="cat-img-cont"><img src={fantasyImg} alt="fantasy" /></div></div>
        <p>Fantasy</p>
      </div>
    </div>
  </div>
);

export default Categories;
