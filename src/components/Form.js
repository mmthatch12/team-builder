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
    }

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Add Team Member</legend>
                    <label>
                        Name:
                        <input
                            type="text"
                            placeholder="Enter your name"
                         />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            placeholder="Enter your name"
                         />
                    </label>
                    <label>
                        Role:
                        <input
                            type="text"
                            placeholder="Enter your name"
                         />
                    </label>
                </fieldset>
                
            </form>

            
        </div>
    )
}
