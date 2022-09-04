import React, { useEffect, useState } from "react";
import api from "./api";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

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
      <div className="ui cards">
        {items.map((item, index) => {
          return (
            <ApprovalCard key={index}>
              <CommentDetail
                name={item.name}
                avatar={item.avatar}
                date={item.date}
                text={item.text}
              />
            </ApprovalCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;