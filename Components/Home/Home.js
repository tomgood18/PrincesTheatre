import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movies from '../Movies/Movies';
import { ScrollView } from 'react-native-gesture-handler';
import {styles} from './Style.js'

export default function Home() {
    return (
        HomeComponent   
      );
}

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