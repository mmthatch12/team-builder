import React, { useState } from 'react'

export default function TeamList() {
    const[ teamMember, setTeamMember ] = useState({ name: '', email: '', role: ''})

    function handleChange(event) {
        console.log(
            'handleChange', 
            event.target.name,
            event.target.value,
            )
            setTeamMember({ ...teamMember, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(teamMember)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <fieldset>
                    <legend>Add Team Member</legend>
                    <label>
                        Name:
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter your name"
                            value={teamMember.name}
                            onChange={handleChange}
                         />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            placeholder="Enter your email"
                         />
                    </label>
                    <label>
                        Role:
                        <input
                            type="text"
                            placeholder="Enter your role"
                         />
                    </label>
                </fieldset>
                
            </form>

            
        </div>
    )
}
