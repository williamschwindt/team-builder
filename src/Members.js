import React from "react";

const Members = props => {
  return (
    <div className="team-members">
      {props.teamMembers.map(member => (
        <div className="team-member">
          <h2>{member.name}</h2>
          <h2>Email: {member.email}</h2>
          <h2>Role: {member.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default Members;