import { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[random].url);
  }

  return (
    <main>
      <form className="form">
        <label htmlFor="top-text">
          Top Text
          <input id="top-text" type="text" className="form--input" />
        </label>
        <label htmlFor="bottom-text">
          Bottom Text
          <input id="bottom-text" type="text" className="form--input" />
        </label>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} className="meme--image" alt="random meme" />
    </main>
  );
}
