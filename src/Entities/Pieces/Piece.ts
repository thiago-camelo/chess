import Position from '../Position'
import Player from '../../Enums/Player'

abstract class Piece {
	protected name: string

	constructor(
		private player: Player,
		private position: Position,
	) {
		this.name = ''
	}

	public abstract canMoveTo(
		position: Position,
		destinationPiece: Piece | undefined,
	): boolean
	public abstract moveTo(position: Position): void

	public getName(): string {
		return this.name
	}

	public getPlayer(): Player {
		return this.player
	}

	public getPosition(): Position {
		return this.position
	}

	public setPosition(position: Position): void {
		this.position = position
	}

	public toString(): string {
		return this.name
	}
}

export default Piece
