import React, { useState } from "react";
import countriesData from "./countries.json";
import "./App.css";

function Country(props) {
  return (
    <div className="country">
      <div className="country-image">
        <img src={props.image} alt={props.name + " flag"} />
      </div>
      <div className="country-details">
        <h2>{props.name}</h2>
        <p>
          <span>Population:</span> {props.population.toLocaleString()}
        </p>
        <p>
          <span>Capital:</span> {props.capital}
        </p>
        <p>
          <span>Continent:</span> {props.continent}
        </p>
      </div>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("");

  const filteredCountries = countriesData.countries.filter(
    (country) => filter === "" || country.continent === filter
  );

  return (
    <div className="App">
      <h1>Countries List</h1>
      <div className="filters">
        <label>
          Filter by Continent:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>
        </label>
      </div>
      <div className="countries">
        {filteredCountries.map((country) => (
          <Country
            key={country.id}
            name={country.name}
            image={country.image}
            population={country.population}
            capital={country.capital}
            continent={country.continent}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
