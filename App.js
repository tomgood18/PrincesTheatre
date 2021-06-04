import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    Home
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  subText: {
    fontSize: 20
  },
  descText: {
    textAlign: 'center'
  }
});

const Home = 
<View style={styles.container}>
  <Text style={styles.titleText}>Prince's Theatre</Text>
  <Text>{"\n"}</Text>
  <Text style={styles.subText}>Classic Movies At Home</Text>
  <Text>{"\n"}</Text>
  <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt{"\n"}ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation</Text>
  <StatusBar style="auto" />
</View>
