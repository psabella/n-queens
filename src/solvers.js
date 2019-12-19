/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  hasRowConflictAt: function(rowIndex) {
    hasAnyRowConflicts: function()
    hasColConflictAt: function(colIndex)
    hasAnyColConflicts:

  for (var i = 0; i < n; i++) {
    if (hasColConflictAt(i)=== false && hasRowConflictAt(i) === false)


  }
  //   var solutionCount = undefined; //fixme
//   var solutionBoard = [];
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

}


  // RecursiveFunction{startMatrix, row, column, avoid}
  // for (i = -0; i < this.rows().length 9++) {
  //     if (column != avoid)
  //     startMatrix[i][value] = 1  // assign rook here
  //     RecursiveFunction(startMatrix, row+1 )

  // }
  //         iterate through length of indivual matrix

  //         PLace Rook. set rook position to 1. value Array.
  //         eliminate the arrays
  //         RecursiveFunction(newMAtrix, )
  solution

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

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
