import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';


export default class Forecast extends React.Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.flex1}>{this.props.main}</Text>
                <Text style={styles.flex2}>{this.props.description}</Text>
                <Text style={styles.flex3}>{this.props.temp} °C </Text>                 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#000000',
        paddingTop: 10,
        opacity: 0.4
    },
    backdrop: { 
        width: '100%', 
        height: '100%' 
    },
    flex1: {
        paddingTop: 35,             
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    flex2: {
        paddingTop: 30,       
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
        textAlignVertical: 'center',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    },
    flex3: {
        paddingTop: 45,   
        paddingBottom: 40,  
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'

    }

});