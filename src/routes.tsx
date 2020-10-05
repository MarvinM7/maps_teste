import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import LoginRoute from './pages/login/routes';
import MapRoutes from './pages/map/routes';
import FavoritesRoutes from './pages/favorites/routes';
import ProfileRoutes from './pages/profile/routes';
import SettingsRoutes from './pages/settings/routes';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class Home extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Mapa"
                style={{backgroundColor: '#F0F'}}
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
        );
    }
}
class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            initialRoute: 'Login',
            firstAccess: true
        }
    }

    componentDidMount() {
        //verificar se já teve o primeiro acesso
        this.setState({
            loading: false,
            initialRoute: 'Home',
            firstAccess: false
        })
    }

    render() {
        return (
            <NavigationContainer>
                {!this.state.firstAccess?
                    <Stack.Navigator initialRouteName={'Login'} headerMode="none">
                        <Stack.Screen name="Login" component={LoginRoute} />
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                : <View></View>
                }    
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
