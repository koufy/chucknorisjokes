import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const JokeCategories = ({ categories }: any) => {
  //CALL sto API gia jokes sugekrimenou Category
  const [jokeFromCategory, setJokeFromCategory] = useState();

  const onClickHandler = (e: any) => {
    e.preventDefault();
    axios
      .get(
        `https://api.chucknorris.io/jokes/random?category=${e.target.innerText}`
      )
      .then((res) => {
        setJokeFromCategory(res.data.value);

      });
  };

  //Call sto APi gia return twn Categories se morfi Button

  const [categoriesj, setCategoriesj] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const res: AxiosResponse<any, any> = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      const { data } = res;
      setCategoriesj(data);
    })();
  }, []);
  return (
    <div>
      <div>
        <p className="categoryMsg">
          ..Or get a joke within the following categories
        </p>
      </div>
      {categoriesj?.map((category, index) => (
        <button
          className="categoryButton cypressTest"
          key={index}
          onClick={onClickHandler}
        >
          {category}
        </button>
      ))}

      {jokeFromCategory && (
        <p className="displayJoke categoryJoke">{jokeFromCategory}</p>
      )}
    </div>
  );
};
export default JokeCategories;
