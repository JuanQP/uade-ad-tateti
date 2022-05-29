import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableRipple } from "react-native-paper";

const BORDER_COLOR = 'gray';

function Cell({ position, value, disabled, onPress }) {
  const row = Math.floor(position / 3);
  const column = position % 3;
  const vertical = row === 0 ? 'upper' : row === 1 ? 'mid' : 'bottom';
  const horizontal = column === 0 ? 'Left' : column === 1 ? 'Mid' : 'Right';
  const positionString = `${vertical}${horizontal}Cell`;

  function handlePress() {
    onPress(position);
  }

  return (
    <TouchableRipple disabled={value || disabled} onPress={handlePress}>
      <Text style={{...styles.mark, ...styles[positionString]}}>
        {value === 'X'? '❌' : value === 'O' ? '⭕' : ''}
      </Text>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  mark: {
    fontSize: 65,
    width: 100,
    height: 100,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  upperLeftCell: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  upperMidCell: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  upperRightCell: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  midLeftCell: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  midMidCell: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  midRightCell: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomLeftCell: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomMidCell: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomRightCell: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: BORDER_COLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
})

export default Cell;
