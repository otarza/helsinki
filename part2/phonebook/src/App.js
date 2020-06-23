import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setFilteredName(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();

    if (isUniqueName(newName) && isUniqueNumber(newNumber)) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} or ${newNumber} is already added to the phonebook`);
    }
  };

  const isUniqueName = name =>
    persons.filter(person => name === person.name).length === 0;

  const isUniqueNumber = number =>
    persons.filter(person => number === person.number).length === 0;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleFilterChange} />
      </div>

      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter(person =>
            person.name.toLowerCase().includes(filteredName.toLowerCase())
          )
          .map(person => (
            <li key={person.number}>
              {person.name} - {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
