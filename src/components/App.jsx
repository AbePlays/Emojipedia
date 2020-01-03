import React from "react";
import Emoji from "./Emoji";
import EmojiInfo from "../emojipedia";

function createEmoji(emo) {
  return (
    <Emoji
      key={emo.id}
      emoji={emo.emoji}
      title={emo.name}
      description={emo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{EmojiInfo.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
