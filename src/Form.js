import React, { useState } from 'react';

function Form(props) {
    const [teamMemeber, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = (e) => {
        setTeamMember({ ...teamMemeber, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newMember = { ...teamMemeber };
        props.addNewTeamMember(newMember);
        setTeamMember({ name: "", email: "", role: "" });
    }

    return(
        <form onSubmit={submitHandler}>
            <h1>Add A New Member</h1>
            <label htmlFor="name">Name</label>
            <input onChange={changeHandler} name="name" type="text" value={teamMemeber.name} />

            <label htmlFor="email">Email</label>
            <input onChange={changeHandler} name="email" type="text" value={teamMemeber.email}/>

            <label htmlFor="role">Role</label>
            <input onChange={changeHandler} name="role" type="text" value={teamMemeber.role}/>

            <button type="submit">Sumbit</button>
        </form>
    );
}

export default Form;