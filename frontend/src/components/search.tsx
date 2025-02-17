'use client';

import styles from "./search.module.scss";
import { useState, useEffect } from "react";

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch("http://127.0.0.1:8000/api/pokemon/");
        const json = await data.json();
        return json;
      };

      fetchData().then((json) => {
        setData(json)
        setResults(json);
      })
    }, []);

    function handleSearchInput(e) {
        e.preventDefault();

        setSearchTerm(e.target.value);

        // filter the data in results
        if (e.target.value.length > 1) {
            setResults(data.filter(item => {
                return item.name.includes(e.target.value);
            }))
        } else {
            setResults(data)
        }

    }

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <input type="text" placeholder="Search it" value={searchTerm} onChange={handleSearchInput} />
          <button>Search</button>
        </header>
        <aside className="sidebar">
          <h2>Filters</h2>
          <ul>
            <li>
              <input type="checkbox" name="filter1"/>
              <label htmlFor="filter1">Filter 1</label>
            </li>
          </ul>
        </aside>
        <section className={styles.content}>
          <h1>Results</h1>
          <ul>
            {results.map((item) => {
              const { id, name, display_type, description, attack } = item;
              return <li key={id}>{name}, {display_type}</li>;
            })}
          </ul>
        </section>
        </div>
    )
}

export default Search