import { action, observable, toJS } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'
import Athlete from './Athlete'
import { useTeamStore } from './TeamStore'

type FormState = {
    name: string
    age: number
    salary: number
}

const initialState: FormState = {
    name: '',
    age: 0,
    salary: 0
}

let formState: FormState = observable({
    name: "",
    age: 0,
    salary: 0,
})

const MoneyForm = () => {
    console.log('formState', toJS(formState), toJS(initialState))

    const { totalYearlyCost, addPlayer } = useTeamStore()

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <h4>Money talks</h4>
            <>Total: {totalYearlyCost} million</>
            <input
                type="text"
                placeholder='player name..'
                style={{ width: '100px', marginTop: '5px' }}
                value={formState.name}
                onChange={action((e) => {
                    formState.name = e.target.value
                })}
            />
            <input
                type="number"
                placeholder='player age..'
                style={{ width: '100px', marginTop: '5px' }}
                value={formState.age || ''}
                onChange={action((e) => {
                    formState.age = Number(e.target.value)
                })}
            />
            <input
                type="number"
                placeholder='salary..'
                style={{ width: '100px', marginTop: '5px' }}
                value={formState.salary || ''}
                onChange={action((e) => {
                    formState.salary = Number(e.target.value)
                })}
            />
            <button
                type="button"
                style={{ width: '109px', marginTop: '5px' }}
                onClick={() => {
                    addPlayer(new Athlete(formState.name, formState.age, formState.salary))
                    formState = observable(initialState)
                }}
            >
                Add player
            </button>
        </div>
    )
}

export default observer(MoneyForm)
