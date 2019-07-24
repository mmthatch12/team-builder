import React, { useState } from 'react'
import './App.css';

import TeamList from './components/Form'

const TeamArray = [
  {
    name: 'Daniel',
    email: 'dansemail@yahoo.com',
    role: 'Senior Developer'
  }, 
  {
    name: 'Hannah',
    email: 'Hannahsemail@yahoo.com',
    role: 'Team Lead'
  },
  {
    name: 'Preston',
    email: 'prestonsemail@yahoo.com',
    role: 'Senior Developer'
  }
]

function App() {
  const[ list, setList ] = useState([])

  
  return (
    <div className="App">
      <h1>Team List!</h1>
      <p></p>
      <TeamList />

    </div>
  );
}

export default App;
