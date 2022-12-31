import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableRipple } from "react-native-paper";
import { CellValue } from '../helpers';

const BORDER_COLOR = 'gray';

const styleKeysGrid: (keyof typeof styles)[][] = [
  ["upperLeftCell", "upperMidCell", "upperRightCell"],
  ["midLeftCell", "midMidCell", "midRightCell"],
  ["bottomLeftCell", "bottomMidCell", "bottomRightCell"],
]

interface Props {
  position: number;
  value: CellValue;
  disabled: boolean;
  highlight?: boolean;
  onPress: (position: number) => void;
}

function Cell({ position, value, disabled, highlight = false, onPress }: Props) {
  const row = Math.floor(position / 3);
  const column = position % 3;
  const styleKey = styleKeysGrid[row][column]

  const textStyle = {
    ...styles.mark,
    ...styles[styleKey],
  }

  function handlePress() {
    onPress(position);
  }

  return (
    <TouchableRipple
      disabled={!!value || disabled}
      onPress={handlePress}
      style={{ backgroundColor: highlight ? '#C1E1C1' : 'transparent' }}
    >
      <Text style={textStyle}>
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
