import React from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="metadata">
          <span className="date">{dayjs(props.date).fromNow()}</span>
        </div>
        <div className="text">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
