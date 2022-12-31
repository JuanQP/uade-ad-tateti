import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Appbar, Button, Text } from "react-native-paper";
import { RootStackParamList } from '../App';
import Cell from './components/Cell';
import { Board, BoardLine, calculateWinner, pickEmptySquare, randomTrueOrFalse } from './helpers';

const WELCOME_MESSAGE = 'Presioná el botón para empezar a jugar 😃';
const EMPTY_BOARD: Board = [null, null, null, null, null, null, null, null, null]

type Props = NativeStackScreenProps<RootStackParamList, "GameScreen">;

function App({ route }: Props) {
  const [player1Name] = useState(route.params.name1);
  const [player1Emoji] = useState(route.params.selectedEmoji1);
  const [player2Name] = useState(route.params.name2);
  const [player2Emoji] = useState(route.params.selectedEmoji2);
  const [player1IsNext, setPlayer1IsNext] = useState(randomTrueOrFalse());
  const [finishedGame, setFinishedGame] = useState(false);
  const [board, setBoard] = useState<Board>(EMPTY_BOARD);
  const [message, setMessage] = useState(WELCOME_MESSAGE);
  const [highlightedLine, setHighlightedLine] = useState<BoardLine | null>(null);
  const [vsMachine] = useState<boolean>(route.params.playerVsMachine);

  function checkWinner(newBoard: Board) {
    const {winnerLine, winner} = calculateWinner(newBoard);
    if(winner) {
      const winnerName = player1Emoji === winner ? player1Name : player2Name;
      setMessage(`Ganó ${winnerName} 🥳`);
      setFinishedGame(true);
      setHighlightedLine(winnerLine);
    }
    else if(newBoard.every(square => square !== null)) {
      setMessage(`La partida terminó en empate 😅`);
      setFinishedGame(true);
    }
  }

  function formatNextMove() {
    let nextPlayer = player1IsNext ? player1Name : player2Name;
    let nextEmoji;
    if(player1IsNext) {
      nextEmoji = player1Emoji === 'X' ? '❌' : '⭕';
    } else {
      nextEmoji = player2Emoji === 'X' ? '❌' : '⭕';
    }
    return finishedGame ? '' : `Es el turno de ${nextPlayer} (juega con ${nextEmoji})`;
  }

  useEffect(() => {
    if(!vsMachine || player1IsNext || finishedGame) return;
    setTimeout(() => {
      const emptyPosition = pickEmptySquare(board);
      const newBoard: Board = [...board];
      newBoard[emptyPosition] = player1Emoji === 'X' ? 'O' : 'X';
      setBoard(newBoard);
      setPlayer1IsNext(true);
      checkWinner(newBoard);
    }, 500);
  }, [player1IsNext, finishedGame]);

  function handleNewGamePress() {
    setBoard([...EMPTY_BOARD]);
    setPlayer1IsNext(randomTrueOrFalse());
    setMessage('A jugar 🧐');
    setFinishedGame(false);
    setHighlightedLine(null);
  }

  function handleCellPress(position: number) {
    const newBoard: Board = [...board];
    newBoard[position] = player1IsNext ? player1Emoji : player2Emoji;
    setBoard(newBoard);
    setPlayer1IsNext(vsMachine ? false : !player1IsNext);
    checkWinner(newBoard);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd' }}>
      <Appbar.Header>
        <Appbar.Content title="TaTeTi" />
      </Appbar.Header>
      <View style={{flex: 0.25, alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 20}}>
          {formatNextMove()}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.row}>
          <Cell
            position={0}
            value={board[0]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(0)}
            onPress={handleCellPress}
          />
          <Cell
            position={1}
            value={board[1]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(1)}
            onPress={handleCellPress}
          />
          <Cell
            position={2}
            value={board[2]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(2)}
            onPress={handleCellPress}
          />
        </View>
        <View style={styles.row}>
          <Cell
            position={3}
            value={board[3]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(3)}
            onPress={handleCellPress}
          />
          <Cell
            position={4}
            value={board[4]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(4)}
            onPress={handleCellPress}
          />
          <Cell
            position={5}
            value={board[5]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(5)}
            onPress={handleCellPress}
          />
        </View>
        <View style={styles.row}>
          <Cell
            position={6}
            value={board[6]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(6)}
            onPress={handleCellPress}
          />
          <Cell
            position={7}
            value={board[7]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(7)}
            onPress={handleCellPress}
          />
          <Cell
            position={8}
            value={board[8]}
            disabled={finishedGame || (vsMachine && !player1IsNext)}
            highlight={finishedGame && highlightedLine?.includes(8)}
            onPress={handleCellPress}
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
