import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from './Movies';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
    return (
        HomeComponent   
      );
}


const styles = StyleSheet.create({
    container: {
        marginTop:50,
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

const HomeComponent = 
<ScrollView>
    <View style={styles.container}>
        <Text style={styles.titleText}>Prince's Theatre</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.subText}>Classic Movies At Home</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt{"\n"}ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation</Text>
        <StatusBar style="auto" />
        <Text>{"\n"}</Text>
        <Text style={styles.subText}>Classic Movie List</Text>
        <Movies />
    </View>
</ScrollView>

    