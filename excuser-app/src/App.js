//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Axios from "axios";

function App() {
  const [text,setText]=useState("");

  const fetchExcuse=(excuses)=>{
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuses}/`)
      .then((res)=>{
        setText(res.data[0].excuse)
      });
    }
  return (
    <div className="App">
    <h1>Excuser-app</h1>
    <button onClick={()=>fetchExcuse("party")}>Party</button>
    <button onClick={()=>fetchExcuse("family")}>Family</button>
    <button onClick={()=>fetchExcuse("office")}>Office</button>
    <h1>{text}</h1>
    </div>
  );
}

export default App;
