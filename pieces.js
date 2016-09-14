var PIECES = {
  buildSquare: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[3][col] = new Block(3, col, "yellow")
    MODEL.board[3][col + 1] = new Block(3, col + 1, "yellow")
    MODEL.board[4][col] = new Block(4, col, "yellow")
    MODEL.board[4][col + 1] = new Block(4, col + 1, "yellow")
    MODEL.currentPiece = "square"
  },

  buildLine: function(col) {
    MODEL.board[1][col] = new Block(1, col, "#00e5ee");
    MODEL.board[2][col] = new Block(2, col, "#00e5ee");
    MODEL.board[3][col] = new Block(3, col, "#00e5ee");
    MODEL.board[4][col] = new Block(4, col, "#00e5ee");
    MODEL.currentPiece = "line"
  },

  buildT: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[3][col+2] = new Block(3, col+2, "purple");
    MODEL.board[3][col] = new Block(3, col, "purple");
    MODEL.board[3][col+1] = new Block(3, col+1, "purple");
    MODEL.board[4][col+1] = new Block(4, col+1, "purple");
    MODEL.currentPiece = "t"
  },

  buildL: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[2][col] = new Block(2, col, "blue");
    MODEL.board[3][col] = new Block(3, col, "blue");
    MODEL.board[4][col] = new Block(4, col, "blue");
    MODEL.board[4][col+1] = new Block(4, col+1, "blue");
    MODEL.currentPiece = "l"
  },

  buildJ: function(col) {
    if (col > MODEL.WIDTH - 2) {
      col = MODEL.WIDTH - 2
    }
    MODEL.board[2][col+1] = new Block(2, col+1, "orange");
    MODEL.board[3][col+1] = new Block(3, col+1, "orange");
    MODEL.board[4][col+1] = new Block(4, col+1, "orange");
    MODEL.board[4][col] = new Block(4, col, "orange");
    MODEL.currentPiece = "j"
  },

  buildS: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[4][col] = new Block(4, col, "green");
    MODEL.board[4][col+1] = new Block(4, col+1, "green");
    MODEL.board[3][col+1] = new Block(3, col+1, "green");
    MODEL.board[3][col+2] = new Block(3, col+2, "green");
    MODEL.currentPiece = "s"
  },

  buildZ: function(col) {
    if (col > MODEL.WIDTH - 3) {
      col = MODEL.WIDTH - 3
    }
    MODEL.board[3][col] = new Block(3, col, "magenta");
    MODEL.board[3][col+1] = new Block(3, col+1, "magenta");
    MODEL.board[4][col+1] = new Block(4, col+1, "magenta");
    MODEL.board[4][col+2] = new Block(4, col+2, "magenta");
    MODEL.currentPiece = "z"
  },


  RandomPiece: function(col) {

    var shapes =(["buildSquare", "buildZ", "buildS", "buildL", "buildJ", "buildLine", "buildT"]);
    var randNum = Math.floor(Math.random()*shapes.length);
    PIECES[shapes[randNum]](col);
  },

  gatherActivePieces: function() {
    var pieces = []
    MODEL.eachCell(function(cell){
      if(cell && cell.active) {
        pieces.push(cell)
      }
    });
    return pieces
  },


  rotateLine: function() {
    var pieces = gatherActivePieces()

    for(var p in pieces) {
      piece.rotState++
      if (piece.rotState === 2) { piece.rotState = 0 }
    }

    switch(pieces[0].rotState) {
      case 0:
        break;
      case 1:
        break;
    }
  }


}
