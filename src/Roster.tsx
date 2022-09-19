import React from 'react'
import { observer } from 'mobx-react'
import TradeForm from './TradeForm'
import { useTeamStore } from './TeamStore'

function Roster() {
    const  { players }  = useTeamStore()

    return (
        <div className='table-wrapper'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Teams</th>
                    <th>Trade form</th>
                    <th>Is it their bday?</th>
                </tr>
                {players.map(athlete => (
                    <tr key={athlete.name}>
                        <td>{athlete.name}</td>
                        <td>{athlete.age}</td>
                        <td>
                            {athlete.teamHistory.map((team, index) => (
                                <>{(index ? ', ' : '') + team}</>
                            ))}
                        </td>
                        <td><TradeForm athlete={athlete} /></td>
                        <td>
                            <button
                                type="button"
                                style={{ width: '100%' }}
                                onClick={() => athlete.wishHappyBirthday()}
                            >
                                Wish  a happy bday!
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default observer(Roster)
