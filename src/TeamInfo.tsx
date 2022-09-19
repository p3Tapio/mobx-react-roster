import { observer } from 'mobx-react'
import React from 'react'
import { useTeamStore } from './TeamStore'

const TeamInfo = () => {
    const { teamName, setMascot } = useTeamStore()
    return (
        <div>
            <h2>Team: {teamName}</h2>
            <input
                type="text"
                placeholder='Change mascot'
                onChange={(e) => setMascot(e.target.value)}
                // value to state and onBlur clear field?
            />
        </div>
    )
}

export default observer(TeamInfo)
