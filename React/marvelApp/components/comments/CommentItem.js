import React from 'react';
import Moment from 'react-moment';

const CommentItem = ({ name, text, date }) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <p className="my-1 comment">{text}</p>
      </div>
      <div>
        <p className="post-date">
          Posted by <strong>{name}</strong> on{' '}
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
