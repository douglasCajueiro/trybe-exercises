let chessPiece = "King";

switch (chessPiece.toLowerCase()) {

    case "pawn":
        console.log(
            "Pawns have the fewest options of movement of all the pieces. On their first move, they have the option to go one or two squares forward. On all other moves, a pawn can only go one square straight forward. The exception to this is when pawns capture the opponent’s chess pieces – then they move forward one square diagonally.");
        break;

    case "rook":
        console.log("The movement is the easiest to learn of all pieces – rooks can go forward, backward, to the left or to the right. Of course, the rook can not change directions in the same move. As long as no other piece is in their way, as they cannot jump over pieces, they are able to move any number of squares in the chosen direction.");
        break;

    case "knight":
        console.log("It moves in an L-shape over the squares. This means that this chess piece first moves two squares in one direction (to the left, to the right, back- or forwards) and then one square into a horizontal or vertical direction.");
        break;

    case "bishop":
        console.log("The bishop is the ruler over the diagonals of the chess board. One of them is light-squared, the other one is dark-squared. When there are no other pieces in their way, bishops can move in any direction diagonally, as many squares as desired. They can capture any piece along the diagonals");
        break;

    case "queen":
        console.log("She can move in any direction and any number of squares. The one thing she can’t do is jump over other pieces. The Queen can capture any of the opponent’s pieces that are in her way.");
        break;

    case "king":
        console.log("It is crucial to keep your king safe and try to weaken the opponents’. The king is limited in his movement. He can move just one square in any direction, but only if he isn’t placed in check by doing so.");
        break;

    default:
        console.log("It's not a valid Chess piece, please try again.");

}