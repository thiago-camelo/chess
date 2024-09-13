import Pawn from './Pieces/Pawn'
import Piece from './Pieces/Piece'
import Position from './Position'
import Player from '../Enums/Player'

class Board {
	private rodada: Player
	private pieces: Array<Piece>

	constructor() {
		this.rodada = Player.White
		this.pieces = []

		this.initPieces(Player.White)
		this.initPieces(Player.Black)

		// console.log('peças iniciadas')

		console.log(this.pieces)
	}

	private initPieces(player: Player): void {
		for (const x of [1, 2, 3, 4, 5, 6, 7, 8]) {
			// more ease

			const pawnLine = player === Player.White ? 2 : 7

			this.pieces.push(new Pawn(player, new Position(x, pawnLine)))
		}

		// outras peças
	}

	public move(origin: Position, destination: Position): boolean {
		
		const originPiece = this.getPieceInPosition(origin)
		const destinationPiece = this.getPieceInPosition(destination)

		// verificar se é mov valido p/ a peça passando a peça da position
		if (!originPiece?.canMoveTo(destination, destinationPiece)) {
			return false
		}

		// verificar se vai ficar em cheque

		// verificar se com base nas peças ao redor, é valido, ex: rei proximo a outro rei

		// definir an passant

		// capturar peça inimiga
		if (destinationPiece) {
			const index = this.pieces.indexOf(destinationPiece)
			this.pieces.splice(index, 1)
		}

		//mover
		originPiece.moveTo(destination)

		return true
	}

	public getPieceInPosition(position: Position): Piece | undefined {
		// for (let piece of this.pieces)
		//     if (position.equals(piece.getPosition()))
		//         return piece

		// return false

		return this.pieces.find((piece) => position.equals(piece.getPosition()))
	}

	public getPieces(): Array<Piece> {
		return this.pieces
	}

	public getRodada(): Player {
		return this.rodada
	}
	
}

export default Board
