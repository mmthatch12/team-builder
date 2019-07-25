import React, { useState } from 'react'
import './App.css';

import TeamList from './components/Form'



function App() {
  const[ member, addMember ] = useState([])
  const[ memberToEdit, setMemberToEdit ] = useState([])

  function editMember(thing) {
    const otherthing = member.map(members =>{
      if(members === memberToEdit){
        console.log('thing', thing)
        return members = thing
      }
    })
    addMember(otherthing)
  }


  return (
    <div className="App">
      <h1>Team List!</h1>
      {member.map(member => {
        return (
          <div>
            <h3>{member.name}</h3>
            <h3>{member.email}</h3>
            <h3>{member.role}</h3>
            <button onClick={() => setMemberToEdit(member)}>Edit</button>
          </div>
        ) 
      })}
      <TeamList addMember={addMember} member={member} memberToEdit={memberToEdit} editMember={editMember} />
      
      

    </div>
  );
}

export default App;
