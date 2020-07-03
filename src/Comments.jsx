import React, { useState } from "react";
import { fetchComments } from "./fetch";

const Comments = () => {
  const [comments, setComments] = React.useState([{ name: "test", id: 1 }]);

  React.useEffect(() => {
    fetchComments().then((res) => {
      setComments(res);
    });
  }, []);

  if (!comments) {
    return "loading...";
  }

  return (
    <div>
      <h1>COMMENTS</h1>
      <ul>
        {comments &&
          comments.map((comment) => {
            return <li key={comment.id}>{comment.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Comments;
