import './BookForm.css';
import book from '../../images/book-form.png';

const BookForm = () => (
  <div className="bookForm">
    <img src={book} alt="book" />
    <h2>New Book</h2>
    <form>
      <input type="text" id="title" name="title" placeholder="Title" required />
      <input type="text" id="author" name="author" placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookForm;
