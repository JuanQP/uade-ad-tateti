export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winnerLine: lines[i], winner: squares[a]};
    }
  }
  return {winnerLine: null, winner: null};
}

export function randomTrueOrFalse() {
  return Math.random() < 0.5 ? true : false;
}

export function pickEmptySquare(board) {
  const emptyPositions = board
    .map((s, i) => ({value: s, position: i}))
    .filter(e => e.value === null);
  return pickRandom(emptyPositions).position;
}

export function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
