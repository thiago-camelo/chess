import CliInterface from "./CliInterface"
import Board from "./Entities/Board"


let game = new CliInterface(new Board())

game.drawBoard()
game.play() // mover peão
game.drawBoard()
