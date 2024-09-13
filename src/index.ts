import CliUI from './CliUI'
import Jogo from './Contracts/Game'
import Board from './Entities/Board'
import Position from './Entities/Position'

const game: Jogo = new CliUI(new Board())

game.drawBoard()

// test
game.move(new Position(4, 2), new Position(4, 4))

game.drawBoard()
