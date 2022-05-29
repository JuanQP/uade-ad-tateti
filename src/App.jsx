import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import Cell from './components/Cell';
import { calculateWinner, pickEmptySquare, randomTrueOrFalse } from './helpers';

const WELCOME_MESSAGE = 'Presioná el botón para empezar a jugar 😃';

function App({ route }) {
  const [playerName] = useState(route.params.name);
  const [playerEmoji] = useState(route.params.selectedEmoji);
  const [playerIsNext, setPlayerIsNext] = useState(randomTrueOrFalse());
  const [finishedGame, setFinishedGame] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [message, setMessage] = useState(WELCOME_MESSAGE);
  const [highlightedLine, setHighlightedLine] = useState([]);

  function checkWinner(newBoard) {
    const {winnerLine, winner} = calculateWinner(newBoard);
    if(winner) {
      setMessage(`Ganó ${winner} 😄`);
      setFinishedGame(true);
      setHighlightedLine(winnerLine);
    }
    else if(newBoard.every(square => square !== null)) {
      setMessage(`La partida terminó en empate 😅`);
      setFinishedGame(true);
    }
  }

  function formatNextMove() {
    let nextPlayer = playerIsNext ? playerName : '🤖';
    let nextEmoji;
    if(playerIsNext) {
      nextEmoji = playerEmoji === 'X' ? '❌' : '⭕';
    } else {
      nextEmoji = playerEmoji === 'X' ? '⭕' : '❌';
    }
    return finishedGame ? '' : `Es el turno de ${nextPlayer} (juega con ${nextEmoji})`;
  }

  useEffect(() => {
    if(playerIsNext || finishedGame) return;
    setTimeout(() => {
      const emptyPosition = pickEmptySquare(board);
      const newBoard = [...board];
      newBoard[emptyPosition] = playerEmoji === 'X' ? 'O' : 'X';
      setBoard(newBoard);
      setPlayerIsNext(true);
      checkWinner(newBoard);
    }, 500);
  }, [playerIsNext, finishedGame]);

  function handleNewGamePress() {
    setBoard(Array(9).fill(null));
    setPlayerIsNext(randomTrueOrFalse());
    setMessage('A jugar 🧐');
    setFinishedGame(false);
    setHighlightedLine([]);
  }

  function handleCellPress(position) {
    const newBoard = [...board];
    newBoard[position] = playerEmoji;
    setBoard(newBoard);
    setPlayerIsNext(false);
    checkWinner(newBoard);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd' }}>
      <Appbar.Header>
        <Appbar.Content title="TaTeTi" />
      </Appbar.Header>
      <View style={{flex: 0.25, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 20}}>
          {formatNextMove(finishedGame, playerIsNext, playerName, )}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.row}>
          <Cell
            position={0}
            onPress={handleCellPress}
            value={board[0]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(0)}
          />
          <Cell
            position={1}
            onPress={handleCellPress}
            value={board[1]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(1)}
          />
          <Cell
            position={2}
            onPress={handleCellPress}
            value={board[2]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(2)}
          />
        </View>
        <View style={styles.row}>
          <Cell
            position={3}
            onPress={handleCellPress}
            value={board[3]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(3)}
          />
          <Cell
            position={4}
            onPress={handleCellPress}
            value={board[4]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(4)}
          />
          <Cell
            position={5}
            onPress={handleCellPress}
            value={board[5]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(5)}
          />
        </View>
        <View style={styles.row}>
          <Cell
            position={6}
            onPress={handleCellPress}
            value={board[6]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(6)}
          />
          <Cell
            position={7}
            onPress={handleCellPress}
            value={board[7]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(7)}
          />
          <Cell
            position={8}
            onPress={handleCellPress}
            value={board[8]}
            disabled={finishedGame || !playerIsNext}
            highlight={finishedGame && highlightedLine.includes(8)}
          />
        </View>
      </View>
      <View style={styles.messageView}>
        <Text style={styles.message}>{message}</Text>
        <Button mode="contained" disabled={!finishedGame} onPress={handleNewGamePress}>
          Jugar de nuevo
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  messageView: {
    flex: 0.25,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
