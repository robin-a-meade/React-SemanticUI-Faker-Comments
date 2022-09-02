import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a className="avatar">
          <img src="https://semantic-ui.com/images/avatar/small/matt.jpg" />
        </a>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            How artistic!
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);