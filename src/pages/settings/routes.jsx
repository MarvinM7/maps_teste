import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsIndex from './index';

const Stack = createStackNavigator();

class SettingsRoute extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="SettingsIndex" component={SettingsIndex} />
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

export default SettingsRoute;
