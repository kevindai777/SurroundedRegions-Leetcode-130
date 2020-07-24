//Objective is to find the resulting matrix after 'capturing' surrounded regions,
//marked by consecutive O's surrounded by X's

let board = 
[[X, X, X, X],
 [X, O, O, X],
 [X, X, O, X],
 [X, O, X, X]]


//O(m*n) solution where m and n are the sizes of the board
//We do a dfs traversal over the board

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
        //If we're on the borders and we pass by a 'O'
        if (board[i][j] == 'O' && (i == 0 || j == 0 || i == board.length - 1 || j == board[0].length - 1)) {
            dfs(i, j)
        }
    }
}

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
        //Everything visited means it hasn't touched an 'X', so
        //they are NOT surrounded
        if (board[i][j] == 'Visited') {
            board[i][j] = 'O'
        } else {
            board[i][j] = 'X'
        }
    }
}

function dfs(i, j) {
    //If out of bounds or has been visited before
    if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] == 'X' || board[i][j] == 'Visited') {
        return
    }

    //Mark the tile as visited and try all 4 other directions
    board[i][j] = 'Visited'
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
    return
}