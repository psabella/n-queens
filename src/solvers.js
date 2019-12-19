/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// to create default board (w/ all 0s)
window.createMatrix = function(n) {
  // n is length of side
  var matrix = [];
  for (var i = 0; i < n; i++) {
    matrix.push([]);
  }
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < n; j++) {
      matrix[i].push(0);
    }
  }
  return matrix;
};

// possibly recursive to keep checking for a valid position in each column/row to place rook?
window.checkForConflicts = function() {
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // create new board, pass in matrix of 0s with length n --> added function createMatrix to create the default board
  var solution = new Board(createMatrix(n));
  var columnIndex = 0;
  // iterate over all rows
  for (var i = 0; i < n; i++) {
    // place a rook in the first available position by setting solution.rows()[i][rowItemIndex] = 1;
    solution.rows()[i][columnIndex] = 1;
    // check for conflicts, row, column - need loop/recursive fn to keep checking for a valid position?
    // if (hasRowConflictAt(i) === false && hasColConflictAt(rowItemIndex) === false) {
    //   continue;
    // } else { ??????
    //   solution.rows()[i][rowItemIndex] = 0;
    // }
    // increment the column index
    columnIndex++;
  }
  solution = solution.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // relevant helper functions (board.js)
  // hasRowConflictAt: function(rowIndex)
  // hasAnyRowConflicts: function()
  // hasColConflictAt: function(colIndex)
  // hasAnyColConflicts: function()

  // variable to hold the collection of solution matrices
  var solutions = [];
  // variable to hold count, to be returned by the fn
  var solutionCount = 0;

  var rowConflicter = function(arr, rowIndex) {
    var specificRow = arr[rowIndex];
    var count = 0;
    for (var i = 0; i < specificRow.length; i++) {
      count += specificRow[i];
      if (count === 1) {
        return true;
      }
    }
    return false; // fixme
  };

  var generateRookBoards = function(arr, colIndex, n) {
  if (colIndex === n) {
      solutions.push(arr);
      solutionCount++;
    }
    else {
      for (var i = 0; i < arr.length; i++) {
        var boardMatrix= arr.slice();
        if (!rowConflicter(boardMatrix, i)) {
          boardMatrix[i][colIndex] = 1;

          generateRookBoards(boardMatrix, colIndex++, n);
        }
      }
    }
  }

var test = createMatrix(5);
console.log(rowConflicter(test, 1));
var board = createMatrix(n);
generateRookBoards(board, 0, 4);


console.log(solutions);
console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
return solutionCount;
};
  // var populateColumn = function(/* what goes here? */) {
    // recursive fn to populate column based on helper fn checks
    // return


  // for (var i = 0; i < n; i++) {
  //   if (hasColConflictAt(i)=== false && hasRowConflictAt(i) === false)
  // }
  //   var solutionMatrix = [];
  // RecursiveFunction {
  //   n--
  // RecursiveFunction(value)

  //     if (value.rows().length === 0)
  //     solutionBoard.push(value);

  //   for (i = 0; i < value.rows().length; i++)
  //     {
  //       tempvalue.
  //       RecursiveFunction()
  //     }

  //   RecursiveFunction(new Board(n))
  //}

  // RecursiveFunction{startMatrix, row, column, avoid}
  // for (i = -0; i < this.rows().length; i++) {
  //     if (column != avoid)
  //     startMatrix[i][value] = 1  // assign rook here
  //     RecursiveFunction(startMatrix, row+1 )
  // }
  //         iterate through length of indivual matrix

  //         PLace Rook. set rook position to 1. value Array.
  //         eliminate the arrays
  //         RecursiveFunction(newMAtrix, )
  //   solution



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
