// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Entry from "./components/Entry";
import Adder from "./components/Adder";
import data from "./data/data.json";
import { useState, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import _ from "lodash";

var alteredData = cloneDeep(data);

function App() {
  const [all, setAll] = useState(alteredData.entries);
  const [data, setData] = useState(alteredData.entries);

  useEffect(() => {
    setData(all);
  }, [all]);

  // tmp
  useEffect(() => {
    console.log(data);
  }, [data]);

  const restore = () => {
    setData(all);
  };

  const add = (entry) => {
    const id = data.at(-1).id + 1;
    const item = { id, data: entry };
    setAll([...all, item]);
  };

  const search = (word) => {
    const matcher = new RegExp(word, "g")
    const match = (el) => matcher.test(el.data.name);
    const results = all.filter(match);
    setData(results);
    console.log(`Search for ${word}...`);
  };

  const sortA = () => {
    setData(_.orderBy(data, "data.name", "asc"));
  };

  const sortD = () => {
    setData(_.orderBy(data, "data.name", "desc"));
  };
  
  const remove = (id) => {
    setAll(all.filter(el => el.id != id))
  }

  return (
    <div className="App">
      <Header sortA={sortA} sortD={sortD} search={search} restore={restore} />

      <main className="Main">
        {data.map((el) => (
          <Entry entry={el} onRemove={remove}/>
        ))}
        <Adder add={add} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
