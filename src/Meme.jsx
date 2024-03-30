import memesData from "./memesData";

function getMemeImage() {
  const memesArray = memesData.data.memes;
  const random = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[random].url;
  console.log(url);
}
getMemeImage();

export default function Meme() {
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
    </main>
  );
}
