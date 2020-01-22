import React, { useState } from 'react';
import './App.css';
import Data from './Data';
import Form from './Form';
import Members from './Members';

function App() {
  const [teamMembers, setTeamMembers] = useState(Data);

  const addNewTeamMember = member => {
    setTeamMembers([...teamMembers, member]);
  }


  return (
    <div className="App">
      <h1>The Team</h1>
      <Members teamMembers={teamMembers} />
      <Form addNewTeamMember={addNewTeamMember} />
    </div>
  );
}

export default App;
