import React from "react";

const Persons = ({ persons, filteredName }) => (
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
);

export default Persons;
