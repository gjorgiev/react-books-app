import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  }

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input" />
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default BookEdit;