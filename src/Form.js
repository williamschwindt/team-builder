import React, { useState } from 'react';

function Form(props) {
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = e => {
        setTeamMember({ ...teamMember, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addNewTeamMember({ ...teamMember });
        setTeamMember({
            name: "",
            email: "",
            role: ""
        });
    }

    return(
        <div className="form-container">
            <h1>Add A New Member</h1>
            <form onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="name">Name</label>
                    <input required onChange={changeHandler} name="name" type="text" value={teamMember.name} />
                </div>

                <div className="form-row">
                    <label htmlFor="email">Email</label>
                    <input required onChange={changeHandler} name="email" type="text" value={teamMember.email}/>
                </div>

                <div className="form-row extra">
                    <label htmlFor="role">Role</label>
                    <input required onChange={changeHandler} name="role" type="text" value={teamMember.role}/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;