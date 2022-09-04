import React, { useEffect, useState } from "react";
import api from "./api";
import CommentDetail from "./CommentDetail";

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

export default App;