import React from "react";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker";
//import moment from 'moment';

// TODO:
// For each comment, generate a random timestamp using faker
// See: https://fakerjs.dev/api/date.html
//
// Format the generated random timestamp relatively
// See: https://bobbyhadz.com/blog/javascript-convert-timestamp-to-time-ago)
// Leads to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat

const rtf = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
});

const App = () => {
  //console.log(faker.date.recent(10));
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div className="comment">
        <a className="avatar">
          <img src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">{faker.name.firstName()}</a>
          <div className="metadata">
            <span className="date">{faker.date.recent(10).toString()}</span>
          </div>
          <div className="text">
            {faker.hacker.phrase()}
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