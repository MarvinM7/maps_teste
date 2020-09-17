import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MapIndex from './index';

const Stack = createStackNavigator();

class MapRoutes extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Mapa" headerMode="none">
                <Stack.Screen name="Mapa" component={MapIndex} />
            </Stack.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default MapRoutes;
