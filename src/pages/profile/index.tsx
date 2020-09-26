import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class ProfileIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }    

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
                <View>
                    <Text style={{color: '#FF0'}}>
                        Tela de Perfil
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
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
});

export default ProfileIndex;
