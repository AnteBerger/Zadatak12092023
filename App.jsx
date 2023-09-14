import './App.css';
import React, { useState } from 'react';
import { UserClass, UserFunction, UserChildren } from './user';

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Ante', years: 34 },
    { name: 'Marko', years: 37 },
    { name: 'Tereza', years: 25 },
  ]);

  const [tekst, setTekst] = useState('Uvećaj godine');

  const uvecajGodine = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 30 };
    });
    setUsers(newUsers);
  };

  return (
    <>
      <h1>State</h1>
      <UserClass name={users[0].name} years={users[0].years} />
      <UserFunction name={users[1].name} years={users[1].years} />
      <UserChildren name={users[2].name} years={users[2].years}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Godina više</button>
    </>
  );
};

export default App;
