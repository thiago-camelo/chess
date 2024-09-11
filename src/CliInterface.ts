import Board from "./Entities/Board"
import Position from "./Entities/Position"



class CliInterface {

    constructor(
        private board: Board
    ) { }

    public drawBoard(): void {

        let indexes = [1,2,3,4,5,6,7,8]

        /**
         * case player
         * brancas: reverse(y)
         * pretas: reverse(x) // testar antes kkk
         */
        for (let y of indexes.reverse()) { // indexes.reverse()) { // como se o player sempre fosse as brancas

            let line: Array<string> = []

            for (let x of indexes) {

                let piece = this.board.getPieceInPosition(new Position(x, y))
            
                if (piece)
                    line.push(piece.toString())
                else
                    line.push((x + y) % 2 ? 'X' : 'O') // mudar para X preto, O branco
                    
            }
                
            console.log(line.join(', '))

        }

        console.log('')

    }

    public play() {

        this.board.move(new Position(2,2), new Position(2,3))

    }

}


export default CliInterface
