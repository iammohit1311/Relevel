N = 3;

// Function to Rotate the
// matrix by 180 degree
function rotateMatrix(mat) {
  // Simply print from last
  // cell to first cell.
  for (var i = N - 1; i >= 0; i--) {
    for (var j = N - 1; j >= 0; j--) console.log(mat[i][j]);
  }
}

// Driver Code
var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateMatrix(mat);

//////////////////////////////////////

let R = 4,
  C = 4,
  t = 0;

// Function to rotate the
// matrix by 180 degree
function reverseColumns(arr) {
  for (let i = 0; i < C; i++) {
    for (let j = 0, k = C - 1; j < k; j++, k--) {
      t = arr[j][i];
      arr[j][i] = arr[k][i];
      arr[k][i] = t;
    }
  }
}

// Function for transpose of matrix
function transpose(arr) {
  for (let i = 0; i < R; i++) {
    for (let j = i; j < C; j++) {
      t = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = t;
    }
  }
}

// Function for display the matrix
function printMatrix(arr) {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) console.log(arr[i][j]);
  }
}

// Function to anticlockwise
// rotate matrix by 180 degree
function rotate180(arr) {
  transpose(arr);
  reverseColumns(arr);
  transpose(arr);
  reverseColumns(arr);
}

// Driver Code
let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
rotate180(arr);
printMatrix(arr);
