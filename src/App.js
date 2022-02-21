import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/ui/Header";
import { Characters } from "./components/characters/Characters";
import { Search } from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(response.data);

      setItems(response.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <>
      <div className="container">
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <Characters isLoading={isLoading} items={items} />
      </div>
    </>
  );
};
export default App;
