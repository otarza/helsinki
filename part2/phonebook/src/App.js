import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Persons from "./Persons";
import PersonForm from "./PersonForm";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const hook = () => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  const [filteredName, setFilteredName] = useState("");

  const handleFilterChange = event => {
    setFilteredName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} filteredName={filteredName} />
    </div>
  );
};

export default App;
