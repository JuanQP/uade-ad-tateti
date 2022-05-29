import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button, RadioButton, Paragraph, Text, TextInput, Title,
} from "react-native-paper";

function PvPScreen({ navigation }) {
  const [name1, setName1] = useState('');
  const [selectedEmoji1, setSelectedEmoji1] = useState('');
  const [name2, setName2] = useState('');

  function handleStartButtonPress() {
    navigation.navigate('GameScreen', {
      name1,
      selectedEmoji1,
      name2,
      selectedEmoji2: selectedEmoji1 === 'X' ? 'O' : 'X',
      playerVsMachine: false,
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          label="Nombre del jugador 1"
          value={name1}
          onChangeText={setName1}
          style={{ width: '100%' }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Cruces</Text>
          <RadioButton
            value="cross"
            status={ selectedEmoji1 === 'X' ? 'checked' : 'unchecked' }
            onPress={() => setSelectedEmoji1('X')}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Círculos</Text>
          <RadioButton
            value="circle"
            status={ selectedEmoji1 === 'O' ? 'checked' : 'unchecked' }
            onPress={() => setSelectedEmoji1('O')}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          label="Nombre del jugador 2"
          value={name2}
          onChangeText={setName2}
          style={{ width: '100%' }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Cruces</Text>
          <RadioButton
            value="cross"
            status={ selectedEmoji1 === 'X' ? 'unchecked' : 'checked' }
            disabled
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Círculos</Text>
          <RadioButton
            value="circle"
            status={ selectedEmoji1 === 'O' ? 'unchecked' : 'checked' }
            disabled
          />
        </View>
      </View>
      <Button
        mode='contained'
        disabled={name1 === '' || selectedEmoji1 === '' || name2 === ''}
        onPress={handleStartButtonPress}
      >
        Comenzar
      </Button>
    </View>
  )
}

export default PvPScreen;
