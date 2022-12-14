import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './Book.css';

const BookSkeleton = () => (
  <div className="book">
    <div className="book-info">
      <div>
        <p className="cat"><Skeleton width={50} /></p>
        <h2><Skeleton width={200} /></h2>
        <p className="author"><Skeleton width={120} /></p>
        <ul>
          <li><Skeleton width={60} /></li>
          <li><Skeleton width={60} /></li>
          <li><Skeleton width={60} /></li>
        </ul>
      </div>
      <div className="completed">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="0, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="percent-div">
          <p className="percent"><Skeleton width={60} /></p>
          <p><Skeleton /></p>
        </div>
      </div>
    </div>
    <div className="chapter-div">
      <p className="current"><Skeleton width={150} /></p>
      <p className="chapter"><Skeleton width={100} /></p>
      <p className="update"><Skeleton /></p>
    </div>
  </div>
);

export default BookSkeleton;
