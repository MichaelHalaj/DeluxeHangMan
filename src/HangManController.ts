/**
 * This is the place where we control the whole HangMan server in general
 */
import { Team } from './Team';
import { Player } from './Player';
import { Game } from './Game';

export class HangManController {
  private listOfPlayers: Player[];
  private listOfTeams: Team[];
  private listOfGameSession: Game[];
  constructor() {
    console.log("New HangManController created!");
    this.listOfGameSession = [];
    this.listOfTeams = [];
    this.listOfPlayers = [];
  }
  addPlayer(newPlayer: Player) {
    this.listOfPlayers.push(newPlayer);
  }
  addTeam(newTeam: Team) {
    this.listOfTeams.push(newTeam);
  }
  addNewGameSession(newPlayer: Player | Team ){
    const newSession = new Game(newPlayer);
    this.listOfGameSession.push(newSession);
  }
  removePlayer() {
    throw new Error("Function not implemented");
  }
  removeTeam() {
    throw new Error("Function not implemented");
  }
}

