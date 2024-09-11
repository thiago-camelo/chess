import Position from "../Position"
import Piece from "./Piece"


class Pawn extends Piece {

    protected name: string = 'P'

    public canMoveTo(position: Position, destinationPiece: Piece): boolean {

        let avancar = this.getPlayer() == Player.White
            ? 1
            : -1

        if (position.getY() != (this.getPosition().getY() + avancar))
            false
        
        if (!destinationPiece)
            return position.getX() == this.getPosition().getX()

        if (destinationPiece.getPlayer() == this.getPlayer())
            return false

        return position.getX() == (this.getPosition().getX() + 1) ||
                position.getX() == (this.getPosition().getX() - 1)

        return true
    }

    public moveTo(position: Position): void {

        // apenas mover
        this.setPosition(position)

    }

}

export default Pawn
