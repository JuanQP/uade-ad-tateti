import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button, RadioButton, Text, TextInput
} from "react-native-paper";
import { RootStackParamList } from '../App';
import { CellValue } from './helpers';

type Props = NativeStackScreenProps<RootStackParamList, "PvMScreen">;

function PvMScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState<NonNullable<CellValue>>('X');

  function handleStartButtonPress() {
    navigation.navigate('GameScreen', {
      name1: name,
      selectedEmoji1: selectedEmoji,
      name2: '🤖',
      selectedEmoji2: selectedEmoji === 'X' ? 'O' : 'X',
      playerVsMachine: true,
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={setName}
          placeholder="Ingresá tu nombre"
          style={{ width: '100%' }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Cruces</Text>
          <RadioButton
            value="cross"
            status={ selectedEmoji === 'X' ? 'checked' : 'unchecked' }
            onPress={() => setSelectedEmoji('X')}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Círculos</Text>
          <RadioButton
            value="circle"
            status={ selectedEmoji === 'O' ? 'checked' : 'unchecked' }
            onPress={() => setSelectedEmoji('O')}
          />
        </View>
      </View>
      <Button
        mode='contained'
        disabled={name === ''}
        onPress={handleStartButtonPress}
      >
        Comenzar
      </Button>
    </View>
  )
}

export default PvMScreen;
