import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {styles} from './Style.js'

function getCinemaWorld(callback){ 
    var key = "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"; 
    var url = "https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies/";
    httpGet(url, key, function(response) {
        if (response !== null){
            var json = JSON.parse(response);
            callback(json);
        } else {
            getCinemaWorld(function(response){
                callback(response);
            })
        }
    });
}

function getFilmWorld(callback){ 
    var key = "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7"; 
    var url = "https://challenge.lexicondigital.com.au/api/v2/filmworld/movies/";

    httpGet(url, key, function(response) {
        if (response !== null){
            var json = JSON.parse(response);
            callback(json);
        } else {
            getFilmWorld(function(response){
                callback(response);
            })
        }
    });
}

var newXHR = null;   
function httpGet(url, key, callback) {

    newXHR = new XMLHttpRequest();
    newXHR.open('GET', url, true);
    newXHR.setRequestHeader("x-api-key", key);
    newXHR.send(null);
    newXHR.onreadystatechange = function() {
        if (this.readyState !== 4){
            return;
        }
        if (this.status === 200 && this.readyState === 4) {
            callback(this.responseText);
        }  else {
            callback(null);
        }
    };
}

function getMovies() {
    const [movieCardList, append] = useState([]);
    const [check, setCheck] = useState(0);
    useEffect(() => {
        var movieCard = {
            cwMovieId: '',
            fwMovieId: '',
            movieName: '',
            actors: '',
            image: '',
            lowP: '',
            highP: '',
            lowC: '',
            highC: '',
        };
        var fwProvider, cwProvider;
        getFilmWorld(function(fwResponse){
            fwProvider = fwResponse;
            getCinemaWorld(function(cwResponse){
                cwProvider = cwResponse;
                let i = 0;
                cwProvider.Movies.forEach(function(movie) {
                    movieCard = {}
                    movieCard.fwMovieId = fwProvider.Movies[i].ID;
                    movieCard.cwMovieId = movie.ID;
                    movieCard.movieName = movie.Title;

                    if (fwProvider.Movies[i].Price < movie.Price) {
                        movieCard.lowP = fwProvider.Movies[i].Price;
                        movieCard.lowC = fwProvider.Provider;
                        movieCard.highP = movie.Price;
                        movieCard.highC = cwProvider.Provider
                    } else {
                        movieCard.lowP = movie.Price;
                        movieCard.lowC = cwProvider.Provider;
                        movieCard.highP = fwProvider.Movies[i].Price;
                        movieCard.highC = fwProvider.Provider
                    }

                    movieCard.image = movie.Poster;
                    movieCard.actors = movie.Actors;
                    append((movieCardList) => [
                        ...movieCardList,
                        movieCard,
                    ]);
                    i++;
                });
                console.log(fwProvider);
            });
        });  
    },[check])
    return movieCardList;
  }


export default function Movies() {
    var movies = getMovies();
    return (
        <View style={styles.mainContainer}>
            {movies.map((movie) => (
                <Card style={styles.containerStyle}>
                    <Card.Cover style={styles.imageStyle} source={{ uri: movie.image }} />
                    <Card.Content>
                        <Title style={styles.titleStyle}>{movie.movieName}</Title>
                        <Paragraph style={styles.paragraphStyle}>Cast: {movie.actors}</Paragraph>
                        <Title style={styles.low}>{movie.lowC}: ${movie.lowP}</Title>
                        <Title style={styles.high}>{movie.highC}: ${movie.highP}</Title>
                    </Card.Content>
                </Card>
            ))}
        </View>
    );
}