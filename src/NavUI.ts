import Game from "./Contracts/Game";
import Position from "./Entities/Position";


class NavUI implements Game {

	drawBoard(): void {
		throw new Error("Method not implemented.");
	}

	drawMovesOf(position: Position): void {
		throw new Error("Method not implemented.");
	}

	move(origin: Position, destination: Position): boolean {
		throw new Error("Method not implemented.");
	}

}
