import React from 'react';
import './App.css';
import Athlete from './Athlete';
import MoneyForm from './MoneyForm';
import Roster from './Roster';
import TeamInfo from './TeamInfo';
import { TeamStoreProvider } from './TeamStore';

const lebron = new Athlete('Lebron James', 37, 10)
const steph = new Athlete("Steph Curry", 34, 12)

const getPlayers = (): Athlete[] => {
  return [lebron, steph]
}

function App() {
  const players = getPlayers()
  return (
    <div className="App">
      <h1>MobX</h1>
      <TeamStoreProvider players={players}>
        <TeamInfo />
        <Roster />
        <MoneyForm />
      </TeamStoreProvider>
    </div>
  );
}

export default App;
