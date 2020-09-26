import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class SettingsIndex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', height: 40, width: 100, top: 25, left: 25, backgroundColor: '#FF0'}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.openDrawer()}
                    >   
                        <FontAwesome name='bars' color={'red'} size={30} />  
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.openDrawer()}
                    >   
                        <Text>Editar perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.openDrawer()}
                    >   
                        <Text>Meus endereços</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.openDrawer()}
                    >   
                        <Text>Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => this.props.navigation.openDrawer()}
                    >   
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    button: {
        width: '100%',
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#00FF00'
    },

    items: {
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        padding: 25,
        top: 100
    },

    item: {
        width: '100%',
        height: 70,
        marginBottom: 15,
        alignItems: "flex-start",
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#2c3e50'
    }
});

export default SettingsIndex;
