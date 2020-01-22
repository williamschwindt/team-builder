import React from "react";

const Members = props => {
  return (
    <div>
      {props.teamMembers.map(member => (
        <div>
          <h2>{member.name}</h2>
          <h2>{member.email}</h2>
          <h2>{member.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default Members;