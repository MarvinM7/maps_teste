import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapIndex from './pages/index';
import Profile from './pages/profile';

const Drawer = createDrawerNavigator();

class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Map">
                    <Drawer.Screen name="Map" component={MapIndex} />
                    <Drawer.Screen name="Profile" component={Profile} />
                </Drawer.Navigator>
            </NavigationContainer>  
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

export default Routes;
