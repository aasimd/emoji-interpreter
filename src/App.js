import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😒": "annoyance",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Smiling Face with Open Hands",
  "🤭": "Face with Hand Over Mouth",
  "🫢": "Face with Open Eyes and Hand Over Mouth",
  "🫣": "Face with Peeking Eye",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🫡": "Saluting Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "🫥": "Dotted Line Face",
  "😏": "Smirking Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Face with Crossed-Out Eyes ",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🥸": "Disguised Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "ConfusedFace",
  "🫤": "Face with Diagonal Mouth",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹ ️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "🥺": "Pleading Face",
  "🥹": "Face Holding Back Tears",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat ",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Enraged Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "💀": "Skull"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function changeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "this is not available in our database";
    }
    if (meaning === "") {
      meaning = "type an emoji";
    }
    setMeaning(meaning);
  }
  function clickHandler(emojis) {
    var meaning = emojiDictionary[emojis];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white", marginTop: "3rem", marginBottom: "3rem" }}>
        iinsiide outtt
      </h1>
      <input
        placeholder="try putting an emoji here"
        onChange={changeHandler}
      ></input>
      <p style={{ color: "white" }}>
        type an emoji above or click on the emojis below to know their meaning
      </p>
      <h2 style={{ color: "rgb(234 179 8)", margin: "3rem" }}>{meaning}</h2>
      <div
        style={{
          margin: "auto",
          margin: "1rem",
          padding: "1rem",
          border: "1px white solid",
          backgroundColor: "rgb(39 39 42)"
        }}
      >
        <p style={{ color: "white" }}>Emojis we know</p>
        <div className="emojisWeKnow">
          {emojisWeKnow.map(function (emoji) {
            return (
              <span onClick={() => clickHandler(emoji)} key={emoji}>
                <li> {emoji} </li>
              </span>
            );
          })}
        </div>
      </div>
      <small style={{ color: "white" }}>project by Aasim 2022 ©</small>
    </div>
  );
}
