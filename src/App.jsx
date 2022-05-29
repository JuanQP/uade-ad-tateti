import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import Cell from './components/Cell';
import { calculateWinner } from './helpers';

const WELCOME_MESSAGE = 'Presioná el botón para empezar a jugar 😃';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [finishedGame, setFinishedGame] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [message, setMessage] = useState(WELCOME_MESSAGE);

  function handleNewGamePress() {
    setBoard(Array(9).fill(null));
    setXIsNext(Math.random() < 0.5 ? true : false);
    setMessage('A jugar 🧐');
    setFinishedGame(false);
  }

  function handleCellPress(position) {
    const newBoard = [...board];
    newBoard[position] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(newBoard);
    if(winner) {
      setMessage(`Ganó ${winner} 😄`);
      setFinishedGame(true);
    }
    else if(newBoard.every(square => square !== null)) {
      setMessage(`La partida terminó en empate 😅`);
      setFinishedGame(true);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd' }}>
      <Appbar.Header>
        <Appbar.Content title="TaTeTi" />
      </Appbar.Header>
      <View style={{flex: 0.25, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 20}}>
          {finishedGame ? '' : `Es el turno de ${xIsNext ? '❌' : '⭕'}`}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.row}>
          <Cell position={0} onPress={handleCellPress} value={board[0]} disabled={finishedGame} />
          <Cell position={1} onPress={handleCellPress} value={board[1]} disabled={finishedGame} />
          <Cell position={2} onPress={handleCellPress} value={board[2]} disabled={finishedGame} />
        </View>
        <View style={styles.row}>
          <Cell position={3} onPress={handleCellPress} value={board[3]} disabled={finishedGame} />
          <Cell position={4} onPress={handleCellPress} value={board[4]} disabled={finishedGame} />
          <Cell position={5} onPress={handleCellPress} value={board[5]} disabled={finishedGame} />
        </View>
        <View style={styles.row}>
          <Cell position={6} onPress={handleCellPress} value={board[6]} disabled={finishedGame} />
          <Cell position={7} onPress={handleCellPress} value={board[7]} disabled={finishedGame} />
          <Cell position={8} onPress={handleCellPress} value={board[8]} disabled={finishedGame} />
        </View>
      </View>
      <View style={styles.messageView}>
        <Text style={styles.message}>{message}</Text>
        <Button mode="contained" disabled={!finishedGame} onPress={handleNewGamePress}>
          Jugar
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
