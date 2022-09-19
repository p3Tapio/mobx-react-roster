import { makeAutoObservable } from "mobx";
import React, { useContext, useRef } from "react";
import Athlete from "./Athlete";

export default class TeamStore {
    constructor(players: Athlete[]) {
        this.players = players
        makeAutoObservable(this)
    }
    state: string = "New York" // = utah, california 
    setState = (state: string) => {
        this.state = state
    }

    mascot: string = ""
    setMascot = (mascot: string) => {
        this.mascot = mascot
    }

    players: Athlete[] = []

    get teamName(): string {
        return `${this.state} ${this.mascot}`
    }

    get totalYearlyCost(): number {
        return this.players.reduce(
            (totalSalary, currentAthlete) => totalSalary + currentAthlete.salary
            , 0
        )
    }

    addPlayer = (player: Athlete) => {
        this.players.push(player)
    }
}

const TeamStoreContext = React.createContext<TeamStore>(
    null as unknown as TeamStore
)

export const useTeamStore = () => useContext(TeamStoreContext)

type TeamStoreProps = {
    children: React.ReactNode,
    players: Athlete[]
}

export const TeamStoreProvider = ({ children, players }: TeamStoreProps) => {
    const store = useRef(new TeamStore(players))

    return (
        <TeamStoreContext.Provider value={store.current}>
            {children}
        </TeamStoreContext.Provider>
    )
}
