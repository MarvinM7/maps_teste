import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import MapRoutes from './pages/map/routes';
import FavoritesRoutes from './pages/favorites/routes';
import ProfileRoutes from './pages/profile/routes';
import SettingsRoutes from './pages/settings/routes';

const Tab = createBottomTabNavigator();
class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Mapa" style={{backgroundColor: '#F0F'}}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
              
                            if (route.name === 'Mapa') {
                                iconName = 'map';
                            } else if (route.name === 'Favoritos') {
                                iconName = 'heart';
                            } else if (route.name === 'Perfil') {
                                iconName = 'user';
                            } else if (route.name === 'Configurações') {
                                iconName = 'cog';
                            }
                
                            return <FontAwesome name={iconName} size={30} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'green',
                        inactiveTintColor: 'yellow',
                        style: {
                            backgroundColor: 'red',
                        }
                    }}
                >
                    <Tab.Screen name="Mapa" component={MapRoutes} />
                    <Tab.Screen name="Favoritos" component={FavoritesRoutes} />
                    <Tab.Screen name="Perfil" component={ProfileRoutes} />
                    <Tab.Screen name="Configurações" component={SettingsRoutes} />
                </Tab.Navigator>
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
