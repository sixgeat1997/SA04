import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            // <ImageBackground source={require('./p1.png')} style={{ width: '100%', height: '100%' }}>
            //     <View style={styles.title} >
            //         <Text style={{ color: 'red',backgroundColor: 'skyblue'}} >Hello </Text>
            //         <Button
            //             title="Press"
            //             onPress={() => Alert.alert('Simple Button pressed')}
            //         />
            //     </View>

            // </ImageBackground>
            <View
                style={{
                    flexDirection: 'column',
                    height: 100,
                    padding: 20,
                }}>
                <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
                <View style={{ backgroundColor: 'red', flex: 0.5 }} />
                <Text>Hello World!</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        textAlign: "center",
        flexDirection: 'column'
    },
    but: {
        flex: 1,

        textAlign: "center",
        flexDirection: 'column',
    },

    title: {
        flex: 1,
        flexDirection: 'column',
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center'


    }


});