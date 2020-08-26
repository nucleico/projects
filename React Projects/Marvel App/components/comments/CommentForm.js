import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/dataActions';

const CommentForm = ({ addComment, id }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(id, { name, text });
    setText('');
    setName('');
  };

  return (
    <div className="post-form">
      <form className="form my-1" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
        </div>
        <input
          className="my-1"
          value={name}
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label htmlFor="text">Comment: </label>
        </div>
        <textarea
          className="my-1"
          cols="30"
          rows="5"
          value={text}
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <input type="submit" className="btn btn-dark my-1" value="Comment!" />
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addComment })(CommentForm);
