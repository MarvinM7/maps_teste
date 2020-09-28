import React, { Component } from 'react';
import { Linking, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
            places: Data.places,
            typePlaces: Data.typePlaces,
            modalVisible: false,
            customMapStyle: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ],
            filter: {
                type: [

                ]
            }
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

    onChangeText(input) {
        this.setState({
            input
        })
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

    filterType = () => {
        let places = [];
        let checekd = false;
        this.state.typePlaces.map((type) => {
            if (type.checked) {
                Data.places.map((place) => {
                    if (type.id === place.typeId) {
                        places.push(place);
                    }
                })
                checekd = true; 
            }
        });

        if (!checekd) {
            places = Data.places;
        }

        this.setState({
            places,
            modalVisible: false
        })
    }

    setToggleCheckBox = (typeId) => {
        let typePlaces = [];

        this.state.typePlaces.map((type) => {
            typePlaces.push(type);
        });

        for (let i = 0; i < typePlaces.length; i++) {
            if (typeId === typePlaces[i].id) {
                typePlaces[i].checked = !typePlaces[i].checked;
            }
        }

        this.setState({
            typePlaces
        });
    }

    render() {
        const { latitude, longitude} = this.state;
        return (
            <View style={styles.container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.viewCentered}>
                        <View style={styles.viewModal}>
                            {this.state.typePlaces.map((type) => (
                                <View key={type.id} style={styles.viewTypePlaces}>
                                    <View style={{width: '90%', justifyContent: "flex-start"}}>
                                        <Text style={styles.modalText}>{type.name}</Text>
                                    </View>
                                    <View style={{width: '10%', justifyContent: "flex-end"}}>
                                        <CheckBox
                                            disabled={false}
                                            value={type.checked}
                                            onValueChange={() => this.setToggleCheckBox(type.id)}
                                        />
                                    </View>
                                </View>
                            ))}

                            <TouchableHighlight
                                style={styles.buttonFilterModal}
                                onPress={() => this.filterType()}
                            >
                                <View style={{width: '100%', height: 40, borderColor: 'green', borderWidth: 1, borderRadius: 40, alignItems: 'center', justifyContent: "center"}}>
                                    <Text>
                                        Filtrar
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                
                <MapView
                    ref={map => this.mapView = map}
                    provider={PROVIDER_GOOGLE}
                    style={[styles.mapView, {width: this.state.width }]}
                    onMapReady={() => this.setState({ width: '100%' })}
                    initialRegion={this.state.region}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass={true}
                    showsPointsOfInterest={false}
                    showsBuildings={false}
                    zoomEnabled={true}
                    toolbarEnabled={true}
                    loadingEnabled={true}
                    rotateEnabled={false}
                    customMapStyle={this.state.customMapStyle}
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
                    {/*<Marker 
                        draggable
                        coordinate={{
                            latitude,
                            longitude
                        }}
                        onDragEnd={(e) => this.setState({ region: e.nativeEvent.coordinate })}
                        title={'Minha localização'}
                    />*/}
                </MapView>
                <View style={styles.viewMapDrawerOverlay} />
                <TextInput
                    style={styles.searchBar}
                    onChangeText={input => this.onChangeText(input)}
                    placeholder={'Procurar'}
                />
                <TouchableOpacity
                    style={styles.buttonFilter}
                    onPress={() => this.setState({ modalVisible: true })}
                >   
                    <FontAwesome name='filter' color={'green'} size={30} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    viewCentered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    viewModal: {
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'green',
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

    viewTypePlaces: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        alignItems: "center",
    },

    buttonFilterModal: {
        width: '80%',
        height: 40,
        borderRadius: 40,
        backgroundColor: '#FFF',
        justifyContent: "center",
        alignItems: "center",
    },

    mapView: {
        height: height - 70
    },

    viewMapDrawerOverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.0,
        height: Dimensions.get('window').height,
        width: 5,
    },

    searchBar: {
        width: '60%',
        height: 40,
        position: 'absolute',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: 'green',
        position: 'absolute',
        top: 30,
        left: 25,
        backgroundColor: '#FFF',
        padding: 10
    },

    buttonFilter: {
        width: '10%',
        height: 40,
        borderRadius: 40,
        borderColor: 'green',
        borderWidth: 1,
        position: 'absolute',
        top: 30,
        left: '70%',
        backgroundColor: '#FFF',
        justifyContent: "center",
        alignItems: "center",
    },

    buttonProfile: {
        width: '10%',
        height: 40,
        borderRadius: 40,
        borderColor: 'green',
        borderWidth: 1,
        position: 'absolute',
        bottom: 12,
        right: 25,
        backgroundColor: '#FFF',
        justifyContent: "center",
        alignItems: "center",
    }
});

export default MapIndex;
