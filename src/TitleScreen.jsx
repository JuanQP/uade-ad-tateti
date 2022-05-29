import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Button, RadioButton, Paragraph, Text, TextInput, Title,
} from "react-native-paper";

function TitleScreen({ navigation }) {
  const [name, setName] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');

  function handleStartButtonPress() {
    navigation.navigate('GameScreen', { name, selectedEmoji });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
      <Title>Ta Te Ti</Title>
      <Paragraph>Seleccioná un nombre y con qué símbolo vas a jugar 😌</Paragraph>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={setName}
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
        disabled={name === '' || selectedEmoji === ''}
        onPress={handleStartButtonPress}
      >
        Comenzar
      </Button>
    </View>
  )
}

export default TitleScreen;
