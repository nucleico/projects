import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearCurrent, getComments } from '../../actions/dataActions';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Alert from '../layout/Alert';

const CommentModal = ({
  commentModalToggle,
  current: { name, id },
  clearCurrent,
  comments,
  getComments,
}) => {
  useEffect(() => {
    if (name) {
      getComments(id);
    }
  }, [id]);

  return (
    commentModalToggle && (
      <div className="comicContainer">
        <p className="favWord commentWord">Leave your comment for {name}!</p>
        <Alert />
        <button className="xBtn" onClick={clearCurrent}>
          X
        </button>
        {comments.map((comment) => (
          <CommentItem
            key={comment._id}
            name={comment.name}
            text={comment.text}
            date={comment.date}
          />
        ))}
        <CommentForm id={id} />
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  commentModalToggle: state.data.commentModalToggle,
  current: state.data.current,
  comments: state.data.comments,
});

export default connect(mapStateToProps, { clearCurrent, getComments })(
  CommentModal
);
