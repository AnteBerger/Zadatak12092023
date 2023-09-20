import './App.css';
import React, { useState } from 'react';
import { UserClass, UserFunction, UserChildren } from './user';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ante', years: 34 },
    { id: 2, name: 'Marko', years: 37 },
    { id: 3, name: 'Tereza', years: 25 },
  ]);

  const [tekst, setTekst] = useState('Uvećaj godine');

  const uvecajGodine = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 30 };
    });
    setUsers(newUsers);
  };

  const handleChangeName = event => {
    console.log ("handleChangeName", event.target.value)
    const newUsers = [...users]
    newUsers[1].name = event.target.value
    setUsers(newUsers)
  }

  return (
    <>
      <h1>State</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleChangeName(e.target.value, index)}
            />
            <p>Ime: {user.name}, Godine: {user.years}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;


