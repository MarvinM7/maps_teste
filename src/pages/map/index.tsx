import React, { Component } from 'react';
import { Linking, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { Data } from './data';
import { FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const screenH = Dimensions.get('screen').height;

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
    });
};

export const Teste = (props) => {
    return (
        <Text
            onPress={() => true ? this.openWhatsapp(props.contact) : this.openInstagram()}
        >
            {props.contact}
        </Text>
    );
};
  
class MapIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: 0,
            longitude: 0,
            status: '',
            width: '99%',
            region: {
                latitude: -8.077025870042284,
                longitude: -34.99885629862547,
                latitudeDelta: 0.0111,
                longitudeDelta: 0.0111,
            },
            places: Data,
            modalVisible: false
        }

        this.getLocationAsync();
    }

    openDialler(number) {
        Linking.openURL('tel:${'+ number + '}');
    }

    openWhatsapp(whatsapp) {
        Linking.openURL('whatsapp://send?text=hello&phone=' + whatsapp);
    }

    openInstagram(instagram) {
        Linking.openURL('instagram://user?username=' + instagram);
    }

    getLocationAsync = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            this.setState({
                status: status
            });
        } else {
            return getCurrentLocation().then(position => {
                if (position) {
                    this.setState({
                        region: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.011,
                            longitudeDelta: 0.011,
                        },
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        status: position.coords.latitude + ' ' + position.coords.longitude
                    });
                }
            });
        }
    };

    render() {
        const { latitude, longitude} = this.state;

        return (
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>

                            <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => this.setState({ modalVisible: false})}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <View style={styles.viewMapView}>
                    <MapView
                        ref={map => this.mapView = map}
                        provider={PROVIDER_GOOGLE}
                        style={[styles.mapView, {width: this.state.width }]}
                        onMapReady={() => this.setState({ width: '100%' })}
                        region={this.state.region}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        showsCompass={true}
                        showsPointsOfInterest={false}
                        showsBuildings={false}
                        zoomEnabled={true}
                        toolbarEnabled={true}
                        loadingEnabled={true}
                        rotateEnabled={false}
                    >
                        {this.state.places.map((marker) => (
                            <Marker 
                                ref={mark => marker.mark = mark}
                                key={marker.id}
                                draggable
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude
                                }}    
                                title={marker.name}
                                description={marker.description}
                                contact={marker.number}
                            />
                        ))}
                        <Marker 
                            draggable
                            coordinate={{
                                latitude,
                                longitude
                            }}
                            onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
                            title={'Minha localização'}
                        />
                    </MapView>
                    <View style={styles.mapDrawerOverlay} />
                    <View style={{position: 'absolute', height: 40, width: 100, top: 25, left: 25, backgroundColor: '#FF0'}}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.openDrawer()}
                        >   
                            <FontAwesome name='bars' color={'red'} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.viewBottomBar}>
                    <View style={styles.viewSearchBar}>
                        <TextInput
                            style={styles.searchBar}
                            onChangeText={() => console.log('yrdyr')}
                            placeholder={'Procurar'}
                        />
                    </View>
                    <View style={styles.viewButton}>
                        <View style={styles.viewFilter}>
                            <TouchableOpacity
                                style={styles.buttonFilter}
                                onPress={() => this.setState({ modalVisible: true })}
                            >   
                                <FontAwesome name='filter' color={'blue'} size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewProfile}>
                            <TouchableOpacity
                                style={styles.buttonProfile}
                                onPress={() => this.setState({ modalVisible: true })}
                            >   
                                <FontAwesome name='heart' color={'red'} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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

    modalView: {
        margin: 20,
        backgroundColor: '#00FF00',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    viewBottomBar: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        backgroundColor: '#FF0',
        padding: 15
    },

    viewSearchBar: {
        width: '60%',
        height: 40,
        borderWidth: 1
    },

    searchBar: {
        height: 40,
        backgroundColor: '#FF0000',
        borderColor: 'gray',
        padding: 10,
        borderWidth: 1,
        width: '100%',
        borderRadius: 40
    },

    viewButton: {
        width: '40%',
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        //backgroundColor: 'blue',
        flexDirection: 'row',
        borderWidth: 1
    },

    viewFilter: {
        width: '50%',
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
    },

    viewProfile: {
        width: '50%',
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
    },

    buttonFilter: {
        width: '80%',
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#00FF00',
        borderRadius: 40
    },

    buttonProfile: {
        width: '80%',
        height: 40,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#00FF00',
        borderRadius: 40
    },

    viewMapView: {
        width: '100%',
        height: height - 70
    },

    mapView: {
        ...StyleSheet.absoluteFillObject,
        top: 20
    },

    mapDrawerOverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.0,
        height: Dimensions.get('window').height,
        width: 5,
    },
      
    place: {
        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20
    }
});

export default MapIndex;

/*

<ScrollView
                    style={styles.placesContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onMomentumScrollEnd={async e => {
                        const place = Math.round(e.nativeEvent.contentOffset.x / width);
                        
                        const { latitude, longitude, mark } = this.state.places[place];
                        this.mapView.animateCamera(
                            {
                                center: {
                                    latitude,
                                    longitude
                                },
                            },
                            {duration: 1000}
                        );

                        setTimeout(() => {
                            mark.showCallout();
                        }, 1000)
                    }}
                >
                    {this.state.places.map((box) => (
                        <View
                            key={box.id}
                            style={styles.place}
                        >
                            <Text>{box.name}</Text>
                            <Text>{box.description}</Text>
                            <View>
                                <FontAwesome name={'phone'} size={50} color={'green'} onPress={()=> this.openDialler(box.whatsapp)} />
                                <FontAwesome name={'whatsapp'} size={50} color={'green'} onPress={()=> this.openWhatsapp(box.whatsapp)} />
                                <FontAwesome name={'instagram'} size={50} color={'green'} onPress={()=> this.openInstagram(box.instagram)} />
                            </View>
                        </View>
                    ))}
                    </ScrollView>
                    */