import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import api from "./api";
import { faker } from "@faker-js/faker";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

api.get('/comments').then((res) => {
  console.log(res.data);
});

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


const App = () => {
  const [items, setItems] = React.useState([]);
  
  // Retrieve the data
  useEffect(() => {
    api.get('/comments').then((response) => {
      setItems(response.data);
    });
  }, []); // The empty dependencies array means "load once"

  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      {items.map((item, index) => {
        return (
          <CommentDetail
            key={index}
            name={item.name}
            avatar={item.avatar}
            date={item.date}
            text={item.text}
          />
        );
      })}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);