import React from "react";
import Entry from "./Entry";
import emojiPedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojiPedia.map((item) => {
          return (
            <Entry
              key={item.id}
              name={item.name}
              emoji={item.emoji}
              meaning={item.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
