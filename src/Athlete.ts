import { action, makeObservable, observable } from 'mobx';

class Athlete {
  name: string;
  age: number;
  teamHistory: string[];
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.teamHistory = [];
    this.salary = salary

    makeObservable(this, {
      name: observable, // observable can be replaced with value true
      age: observable,
      teamHistory: observable,
      salary: observable,
      wishHappyBirthday: action,
      tradePlayer: action,
    });
  }

  wishHappyBirthday() {
    this.age++;
  }

  tradePlayer(team: string) {
    this.teamHistory.push(team);
  }
}

export default Athlete;
