import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐ซ ": "Melting Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐ฅฒ": "Smiling Face with Tear",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Smiling Face with Open Hands",
  "๐คญ": "Face with Hand Over Mouth",
  "๐ซข": "Face with Open Eyes and Hand Over Mouth",
  "๐ซฃ": "Face with Peeking Eye",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ซก": "Saluting Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐ซฅ": "Dotted Line Face",
  "๐": "Smirking Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",
  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Face with Crossed-Out Eyes ",
  "๐ตโ๐ซ": "Face with Spiral Eyes",
  "๐คฏ": "Exploding Head",
  "๐ค ": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face",
  "๐ฅธ": "Disguised Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "ConfusedFace",
  "๐ซค": "Face with Diagonal Mouth",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "โน ๏ธ": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ฅบ": "Pleading Face",
  "๐ฅน": "Face Holding Back Tears",
  "๐ฆ": "Frowning Face with Open Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat ",
  "๐ฅ": "Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ก": "Enraged Face",
  "๐ ": "Angry Face",
  "๐คฌ": "Face with Symbols on Mouth",
  "๐": "Smiling Face with Horns",
  "๐ฟ": "Angry Face with Horns",
  "๐": "Skull"
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
      <small style={{ color: "white" }}>project by Aasim 2022 ยฉ</small>
    </div>
  );
}
