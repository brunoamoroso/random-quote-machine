import Quotebox from "./components/Quotebox";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [rgb, setRgb] = useState(['13','13','13']);

  function randomColor() {
    setRgb([]);
    const maxValue = 256;
    let i = 0;

    while (i < 3) {
      let colorValue = 0;
      colorValue = Math.floor(Math.random() * maxValue).toString();
      setRgb(arr => [...arr, colorValue])
      i++;
    }

    console.log(rgb);
  }

  useEffect(() => {
    fetch("https://api.quotable.io/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setQuote('" ' + data.content + ' "');
        setAuthor("— " + data.author);
        randomColor();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb("+rgb[0]+','+rgb[1]+','+rgb[2]+')',
      }}
    >
      <Quotebox quote={quote} author={author}></Quotebox>
    </div>
  );
}

export default App;
