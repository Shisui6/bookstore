const BookForm = () => (
  <div>
    <input type="text" id="title" name="title" placeholder="Book title" required />
    <input type="text" id="author" name="author" placeholder="Book author" required />
    <button type="submit">Add Book</button>
  </div>
);

export default BookForm;
