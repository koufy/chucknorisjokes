import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";

interface Joke {
    categories:string[];
    created_at:string;
    icon_url:string;
    id:string;
    url:string;
    updated_at:string;
    value:string;

  };


export default function SearchPage() {
  const [searchedJoke, setSearchedJoke] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");


  //Call sto API me vasi to input pou dinei o user kai return ta results
  useEffect(() => {
    axios
      .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then((res:AxiosResponse<any, any>) => {
        setIsLoading(true);
        setSearchedJoke(res.data.result);
        setIsLoading(false);
              })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <>
      <div className="searching">

      <form className="jokeForm">
        <label>
          <h2>
          Type here any word to find your joke:
          </h2>
          <input
          className="jokeInput"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        {isLoading && <p>Loading...</p>}
      </form>
      </div>

      {searchedJoke.length>0  && searchedJoke?.map((joke:Joke, index:number) => (
        <div className="displayJoke" key={index}>{joke.value}</div>
      ))}
      {(searchedJoke.length===0 && query.length>2) &&  <p className="noJokeText">no jokes found</p>}
    </>
  );
}
