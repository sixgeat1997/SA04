import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {

    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()

    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', 
                description: '-', 
                temp: 0
            }
        }
    }


    render() {
        return (
            <View style={styles.pad}>
                <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
                    <Text style={styles.bg}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast}/>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {  
        paddingTop: 30 
    },
    backdrop: { 
        width: '100%', 
        height: '100%' 
    },
    pad: {
        paddingTop: 30,
        flexDirection: 'column',
        justifyContent:  'center',
        alignItems:'center'
    },
    bg: {
        paddingTop: 20,
        opacity: 0.4,
        backgroundColor: '#000000',
        opacity: 0.4,
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'

    }
});