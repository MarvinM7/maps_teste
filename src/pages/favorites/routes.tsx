import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesIndex from './index';

const Stack = createStackNavigator();

class FavoritesRoutes extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Favoritos" headerMode="none">
                <Stack.Screen name="Favoritos" component={FavoritesIndex} />
            </Stack.Navigator>
        );
    }
}

export default FavoritesRoutes;
