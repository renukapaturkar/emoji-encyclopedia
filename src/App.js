import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤗": "Hugging Face",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😌": "Relieved Face",
  "😴": "Sleeping Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    //console.log(userInput);

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out!</h1>

      <input className="input-box" onChange={inputChangeHandler} />
      <div className="output-box">{meaning}</div>

      <h3>Emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "1.5rem", padding: "0.5em", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
