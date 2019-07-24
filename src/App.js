import React, { useState, useEffect } from 'react'
import './App.css';

import TeamList from './components/Form'

// const teamArray = [
//   {
//     name: 'Daniel',
//     email: 'dansemail@yahoo.com',
//     role: 'Senior Developer'
//   }, 
//   {
//     name: 'Hannah',
//     email: 'Hannahsemail@yahoo.com',
//     role: 'Team Lead'
//   },
//   {
//     name: 'Preston',
//     email: 'prestonsemail@yahoo.com',
//     role: 'Senior Developer'
//   }
// ]

function App() {
  const[ member, addMember ] = useState([])
  const[ memberToEdit, setMemberToEdit ] = useState([])
  const[ newMember, setNewMember ] = useState({})
  
  useEffect(() => {
    addMember([...member, newMember])
  }, [newMember])

  return (
    <div className="App">
      <h1>Team List!</h1>
      {member.map(member => {
        return (
          <div>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
            <button onClick={() => setMemberToEdit(memberToEdit)}>Edit</button>
          </div>
        ) 
      })}
      <TeamList member={member} setNewMember={setNewMember} memberToEdit={memberToEdit } />
      
      

    </div>
  );
}

export default App;
