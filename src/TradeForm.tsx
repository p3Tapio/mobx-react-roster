import { observer } from 'mobx-react'
import React, { useState } from 'react'
import Athlete from './Athlete'

type TradeFormProps = {
    athlete: Athlete
}

const TradeForm = ({ athlete }: TradeFormProps) => {
    const [teamName, setTeamName] = useState<string>('')
    return (
        <>
            <input
                type="text"
                placeholder='Team name ...'
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
            />
            <span>
                <button
                    type="button"
                    onClick={() => {
                        athlete.tradePlayer(teamName)
                        setTeamName('')
                    }}
                >
                    Trade
                </button>
            </span>
        </>
    )
}

export default observer(TradeForm)
