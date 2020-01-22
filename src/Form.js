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
        <div className="form-container">
            <h1>Add A New Member</h1>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input onChange={changeHandler} name="name" type="text" value={teamMemeber.name} />
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input onChange={changeHandler} name="email" type="text" value={teamMemeber.email}/>
                </div>

                <div className="form-row extra">
                    <label htmlFor="role">Role</label>
                    <input onChange={changeHandler} name="role" type="text" value={teamMemeber.role}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;