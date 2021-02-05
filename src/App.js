// Library
import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

// Style
import "./styles.css";

// Service
import { getHeroes } from "./services/heroService";

// Component
import Search from "./components/Search";
import Hero from "./components/Hero";

const App = () => {
  const [searchHeroes, setSearchHeroes] = useState();

  // On Component Mount
  useEffect(() => {
    getData();
  }, []);

  // Fetch heroes data
  const getData = () => {
    const data = getHeroes();
    setSearchHeroes(data);
  };

  const onChange = (query) => {
    // If input empty, show all heroes
    if (!query) {
      getData();
      return;
    }

    // If input fill, setup fuse search
    const fuse = new Fuse(searchHeroes, {
      keys: ["name", "roles"],
    });
    const result = fuse.search(query);
    const finalResult = [];
    if (result.length) {
      result.forEach((hero) => {
        finalResult.push(hero.item);
      });
      setSearchHeroes(finalResult);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="title">Mobile Legends</div>
        <div className="searchc">
          <Search handleChange={onChange} />
        </div>
        <div className="heroesc">
          {searchHeroes &&
            searchHeroes.map((hero) => <Hero {...hero} key={hero._id} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
