import logo from "./logo.svg";
import Quotebox from "./components/Quotebox";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [rgb, setRgb] = useState([]);

  function randomColor(){
    const maxValue = 256;
    let colorValue = 0;
    let i = 0;

    while(i < 3){
      colorValue = Math.floor(Math.random() * maxValue);
      if(i == 0){
        setRgb(colorValue);
      }
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
        setAuthor("— "+ data.author);
        randomColor();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <Quotebox quote={quote} author={author}></Quotebox>
    </div>
  );
}

export default App;
