import React from "react";
import { nestedComments } from "../utils/constants.js";

const Comment = ({ comment }) => {
  return (
    <div className="flex flex-row items-start gap-5 p-1 bg-slate-100">
      <img
        src={`https://i.pravatar.cc/150?img=${comment.id}`}
        alt="comment user image"
        className="w-12 h-12 mr-1 rounded-full mt-2"
      />
      <div className="">
        <p className="font-bold text-lg capitalize">{comment.user}</p>
        <p className="text-lg text-ellipsis">{comment.text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ commentsData }) => {
  return commentsData?.map((comment) => (
    <div key={comment.id}>
      <Comment comment={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList commentsData={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-full px-5 py-2 flex flex-col gap-3">
      <h1 className="font-bold text-xl">Comments: </h1>
      <CommentsList commentsData={nestedComments} />
    </div>
  );
};

export default CommentsContainer;
