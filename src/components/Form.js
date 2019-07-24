import React, { useState } from 'react'

export default function TeamList() {
    const[ teamMember, setTeamMember ] = useState('')
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
                </fieldset>
                
            </form>

            <h1>Team List!</h1>
        </div>
    )
}
