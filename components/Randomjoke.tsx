import { useState } from "react";
const axios = require("axios");
import Link from "next/link";
import { AxiosResponse } from "axios";




//displaying a random joke

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState("Wanna hear a joke?");

  const handleClick = (e: any) => {
    e.preventDefault();
    axios.get("https://api.chucknorris.io/jokes/random").then((res:AxiosResponse<any,any>) => {
      setRandomJoke(res.data.value);
      
    });
  };

  return (
  <div >
    <div className="twoButtons">
      <button className="categoryButton randomJoke" 
      onClick={handleClick}>
        Click here for a random joke!
        </button>
       
        <img src="./chucknorisimage.jpg" alt="asd"/>
      <button className="toSearchPage">
        <Link className="nodecor" href="/searchPage"><p className="toSearchPageText">Go to Search Page</p></Link>
      </button>
   </div>
   <div className="displayJoke">
      {randomJoke && <p>{randomJoke}</p>}
   </div>

    </div>
  );
};
export default RandomJoke;
