import Jogo from './Contracts/Game'
import Board from './Entities/Board'
import Position from './Entities/Position'

class CliInterface implements Jogo {

	constructor(private board: Board) {}

	drawMovesOf(position: Position): void {
		throw new Error('Method not implemented.')
	}

	move(origin: Position, destination: Position): boolean {
		return this.board.move(origin, destination)
	}

	public drawBoard(): void {
		const indexes = [1, 2, 3, 4, 5, 6, 7, 8]

		/**
		 * case player
		 * brancas: reverse(y)
		 * pretas: reverse(x) // testar antes kkk
		 */
		for (const y of indexes.reverse()) {
			// indexes.reverse()) { // como se o player sempre fosse as brancas

			const line: Array<string> = []

			for (const x of indexes) {
				const piece = this.board.getPieceInPosition(new Position(x, y))

				if (piece) {
					line.push(piece.toString())
				} else {
					line.push((x + y) % 2 ? 'X' : 'O')
				} // mudar para X preto, O branco
			}

			console.log(line.join(', '))
		}

		console.log('')
	}

	public play(): void {
		
	}
}

export default CliInterface
