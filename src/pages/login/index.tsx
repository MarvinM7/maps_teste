import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//import { useNavigation } from '@react-navigation/native';
//import { FilledTextField, OutlinedTextField, TextField } from 'react-native-material-textfield';

//const navigation = useNavigation();

class LoginIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            colorLoginText: 'grey'
        }
    }

    changeEmail = (email: string) => {
        this.setState({
            email
        }, () => {
            this.changeLoginButton();
        })
    }

    changePassword = (password: string) => {
        this.setState({
            password
        }, () => {
            this.changeLoginButton();
        })
    }

    changeLoginButton = () => {
        let colorLoginText = 'grey';
        if (this.state.email !== '' && this.state.password !== '') {
            colorLoginText = '#000';
        }

        this.setState({
            colorLoginText
        })
    }

    loginWithGoogle = () => {
        console.log('logar com google');
    }

    forgotPassword = () => {
        console.log('esqueci minha senha');
    }

    signUp = () => {
        console.log('cadastrar');
    }

    loginWithEmail = () => {
        if (this.state.email !== '' && this.state.password !== '') {
            console.log('logar com email');
        }
    }

    withoutLogin = () => {
        console.log('teste');
        this.props.navigation.navigate('Home');
        //navigation.navigate('Mapa');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewNameApp}>
                    <Text style={styles.textNameApp}>
                        Delivery
                    </Text>
                </View>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 70}}>
                    <TouchableOpacity
                        style={{flexDirection: 'row', width: '80%', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#000', height: 50, borderRadius: 5, backgroundColor: '#FFF'}}
                        onPress={() => this.loginWithGoogle()}    
                    >
                        <FontAwesome name='google' color={'green'} size={30} style={{marginRight: 20}} />
                        <Text>
                            Entrar com Google
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 10}}>
                    <TextInput
                        style={{width: '80%', borderWidth: 1, borderColor: '#000', height: 50, padding: 15, borderRadius: 5, backgroundColor: '#FFF'}}
                        onChangeText={email => this.changeEmail(email)}
                        placeholder={'Email'}
                        placeholderTextColor={'#000'}
                    />
                </View>
                <View style={{width: '100%', alignItems: 'center', marginBottom: 10}}>
                    <TextInput
                        style={{width: '80%', borderWidth: 1, borderColor: '#000', height: 50, padding: 15, borderRadius: 5, backgroundColor: '#FFF'}}
                        onChangeText={password => this.changePassword(password)}
                        placeholder={'Senha'}
                        placeholderTextColor={'#000'}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={{width: '80%', borderWidth: 1, borderColor: '#000', height: 50, padding: 15, borderRadius: 5, backgroundColor: 'green', alignItems: 'center'}}
                    onPress={() => this.loginWithEmail()}    
                >
                    <Text style={{color: this.state.colorLoginText}}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', width: '80%', marginBottom: 50}}>
                    <View style={{width: '70%', alignItems: 'flex-start'}}>
                        <Text onPress={() => this.forgotPassword()}>
                            Esqueci a senha
                        </Text>
                    </View>
                    <View style={{width: '30%', alignItems: 'flex-end'}}>
                        <Text onPress={() => this.signUp()}>
                            Cadastrar
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <Text
                        style={{color: 'grey'}}
                        onPress={() => this.withoutLogin()}
                    >
                        {'Entrar sem logar'}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    viewNameApp: {
        marginBottom: 30
    },

    textNameApp: {
        fontSize: 50
    }
});

export default LoginIndex;
