import Position from "../Entities/Position"

interface Game {
	drawBoard(): void
	drawMovesOf(position: Position): void
	move(origin: Position, destination: Position): boolean
}

export default Game
