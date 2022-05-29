import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Paragraph, Text, Title, TouchableRipple,
} from "react-native-paper";

function TitleScreen({ navigation }) {
  function handlePvPPress() {
    navigation.navigate('PvPScreen');
  }

  function handlePvMPress() {
    navigation.navigate('PvMScreen');
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#eeeedd', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
      <Title>Ta Te Ti</Title>
      <Paragraph>Seleccioná una modalidad de juego 😌</Paragraph>
      <View>
        <TouchableRipple
          onPress={handlePvPPress}
          style={styles.surface}
        >
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 40}}>🧑vs🧑</Text>
            <Text>Jugador vs Jugador</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={handlePvMPress}
          style={styles.surface}
        >
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 40}}>🧑vs🤖</Text>
            <Text>Jugador vs Celular</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  surface: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    padding: 20,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 1,
    elevation: 4,
  },
});

export default TitleScreen;
