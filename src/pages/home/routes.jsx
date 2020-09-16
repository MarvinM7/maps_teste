import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIndex from './index';

const Stack = createStackNavigator();

class HomeRoute extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeIndex"
                    component={HomeIndex}
                    options={{
                        title: 'Home Título',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            textAlign: 'center'
                        },
                    }}
                />
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

export default HomeRoute;
