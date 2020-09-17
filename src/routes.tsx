import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './drawerContent';
import MapRoutes from './pages/map/routes';
import ProfileRoutes from './pages/profile/routes';

const Drawer = createDrawerNavigator();

class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Mapa" drawerContent={props => <DrawerContent { ...props} />}>
                    <Drawer.Screen name="Mapa" component={MapRoutes} />
                    <Drawer.Screen name="Perfil" component={ProfileRoutes} />
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
