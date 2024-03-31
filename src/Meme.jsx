import { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
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
      </div>
      <img src={meme.randomImage} className="meme--image" alt="random meme" />
    </main>
  );
}
