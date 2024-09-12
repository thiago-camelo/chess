class Position {
	constructor(
		private x: number,
		private y: number,
	) {}

	getX(): number {
		return this.x
	}
	getY(): number {
		return this.y
	}

	public equals(position: Position): boolean {
		return position.getX() === this.x && position.getY() === this.y
	}

	toString(): string {
		return `${this.x} - ${this.y}`
	}
}

export default Position
