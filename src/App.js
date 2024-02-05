import "./App.css";
import Button from "./components/Button";
import Gif from "./components/Gif";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  // state
  const [gif, setGif] = useState();

  // submit function
  const handleSubmit = async () => {
    //api
    const key = "s8vCMiiMufV6xJtiHWrzZbb3SIMAyhh6";
    const gif = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    let res = await fetch(gif);
    let json = await res.json();
    console.log("url", json.data.images.fixed_height.url);
    const fixedGif = json.data.images.fixed_height.url;
    setGif(fixedGif);
  };

  return (
    <div className="App">
      <Header />
      <Button submit={handleSubmit} />
      <Gif gif={gif} />
    </div>
  );
}

export default App;
