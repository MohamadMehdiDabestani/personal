import { equals3, max, min } from '../common';
import { useGame } from '@org/store';

const ai = 'X';
const client = 'O';
type Board = string[][];

export const checkWinner = (board: Board) => {
  let winner = null;
  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots === 0) {
    return 'draw';
  } else {

    return winner;
  }
};
interface Score {
  X: number;
  O: number;
  draw: number;
}
const scores = {
  X: 10,
  O: -10,
  draw: 0,
};
function minimax(board: Board, depth: number, isMaximizing: boolean) {
  const result = checkWinner(board);

  if (result !== null) {
   
    return scores[result as keyof Score];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          useGame.getState().setSpot(i, j, ai);
          const score = minimax(board, depth + 1, false);
          useGame.getState().setSpot(i, j, '');
          bestScore = max([score, bestScore]);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] === '') {
          useGame.getState().setSpot(i, j, client);
          const score = minimax(board, depth + 1, true);
          useGame.getState().setSpot(i, j, '');
          bestScore = min([score, bestScore]);
        }
      }
    }
    return bestScore;
  }
}

export const bestMove = (board: Board) => {
  // AI to make its turn
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Is the spot available?
      if (board[i][j] === '') {
        useGame.getState().setSpot(i, j, ai);
        const score = minimax(board, 0, false);
        useGame.getState().setSpot(i, j, '');
        if (score > bestScore && useGame.getState().currentPlayer === ai) {
          bestScore = score;
          move = { i, j };
          useGame.getState().setSpot(move?.i as number, move?.j as number, ai);
          useGame.getState().toggleCurrentPlayer();
        }
      }
    }
  }
};
