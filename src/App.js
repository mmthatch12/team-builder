import React, { useState } from 'react'
import './App.css';

import TeamList from './components/Form'

const teamArray = [
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

function App(props) {
  const[ member, addMember ] = useState(teamArray)
  const[ memberToEdit, setMemberToEdit ] = useState()

  

  return (
    <div className="App">
      <h1>Team List!</h1>
      {teamArray.map(member => {
        return (
          <div>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
          </div>
        ) 
      })}
      <TeamList />

      

    </div>
  );
}

export default App;
