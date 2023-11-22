import React, { useState } from 'react';

const CommentForm = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');  // Clear the comment input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
     <textarea
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  placeholder="Enter your comment or question..."
  className="bg-gray-100 p-2 rounded-lg border border-gray-300 w-full resize-y"
  style={{ minHeight: '60px' }} // Set a minimum height to resemble Facebook's style
/>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
