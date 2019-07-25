import React, { useState, useEffect } from 'react'

export default function TeamList(props) {
    const[ teamMember, setTeamMember ] = useState({ name: '', email: '', role: ''})
    const[ isEditing, setIsEditing ] = useState(false)
    

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
        if(isEditing === true) {
            props.editMember(teamMember) 
            setIsEditing(false)
        } else {
        props.addMember([...props.member, teamMember])
        console.log(teamMember)
        }
    }

    useEffect(() => {
        console.log('props.mebertoedit', props.memberToEdit)
        setTeamMember(props.memberToEdit)
        setIsEditing(true)
    }, [props.memberToEdit])

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <fieldset>
                    <legend>Add Team Member</legend>
                    <label>
                        Name:
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={teamMember.name}
                            onChange={handleChange}
                            name='name'
                         />
                    </label>
                    <label>
                        Email:
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={teamMember.email}
                            onChange={handleChange}
                            name='email'
                         />
                    </label>
                    <label>
                        Role:
                        <input
                            type="text"
                            placeholder="Enter your role"
                            value={teamMember.role}
                            onChange={handleChange}
                            name='role'
                         />
                    </label>
                    <button>Submit!</button>
                </fieldset>
                
            </form>

            
        </div>
    )
}
