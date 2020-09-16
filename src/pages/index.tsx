import React, { Component } from 'react';
import { TouchableOpacity, Linking, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions } from 'react-native';
import * as Location from 'expo-location';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

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
            distance: 0,
            status: '',
            region: {
                latitude: -8.077025870042284,
                longitude: -34.99885629862547,
                latitudeDelta: 0.0111,
                longitudeDelta: 0.0111,
            },
            places: [
                {
                    id: 1,
                    name: 'Vou Ali',
                    description: 'Descrição',
                    type: 'food',
                    latitude: -8.077025870042284,
                    longitude: -34.99885629862547,
                    whatsapp: '5581998735119',
                    instagram: 'marvinm7'
                },
                {
                    id: 2,
                    name: 'Kazoku Temakeria',
                    description: 'Descrição',
                    type: 'food',
                    latitude: -8.077229687421696,
                    longitude: -34.999230802059174,
                    whatsapp: '5581998735119',
                    instagram: 'marvinm7'
                },
                {
                    id: 3,
                    name: 'Mendonça Refeições',
                    description: 'Descrição',
                    type: 'food',
                    latitude: -8.03783791263091,
                    longitude: -34.95871804654598,
                    whatsapp: '5581998735119',
                    instagram: 'marvinm7'
                },
                {
                    id: 4,
                    name: 'Sorveteria Coltelli',
                    description: 'Descrição',
                    type: 'food',
                    latitude: -8.03974514677866,
                    longitude: -34.95786979794502,
                    whatsapp: '5581998735119',
                    instagram: 'marvinm7'
                },
                {
                    id: 5,
                    name: 'Turim Pizza',
                    description: 'Descrição',
                    type: 'food',
                    latitude: -8.038322938561983,
                    longitude: -34.957346096634865,
                    whatsapp: '5581991086040',
                    instagram: 'marvinm7'
                }
            ]
        }

        this.getLocationAsync();
        //this.teste();
    }

    openDialler(number) {
        Linking.openURL('tel:${81998735119}');
    }

    openWhatsapp(number) {
        Linking.openURL('whatsapp://send?text=hello&phone=' + number);
    }

    openInstagram(profile) {
        Linking.openURL('instagram://user?username=marvinm7');
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

    /*teste = () => {
        let distance = getDistance(
            { latitude: 20.0504188, longitude: 64.4139099 },
            { latitude: 51.528308, longitude: -0.3817765 }
        );
        
        console.log(distance);
        this.setState({
            distance 
        })
    }*/    

    render() {
        const { latitude, longitude} = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.viewMapView}>
                    <MapView
                        ref={map => this.mapView = map}
                        provider={PROVIDER_GOOGLE}
                        style={styles.mapView}
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
                            //onPress={() => this.openWhatsapp('5581998735119')}
                        />
                    </MapView>
                </View>
                
                <View style={styles.viewBottomBar}>
                    <View style={styles.viewSearchBar}>
                        <TextInput
                            style={styles.searchBar}
                            onChangeText={() => console.log('yrdyr')}
                            placeholder={'Procurar2'}
                        />
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            style={styles.button}
                            
                        >   
                            <Text>
                                {this.state.distance}
                            </Text>    
                        </TouchableOpacity>
                    </View>
                </View>


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
                    {/*this.state.places.map((box) => (
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
                    ))*/}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    viewBottomBar: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        backgroundColor: '#FF0',
        padding: 15
    },

    viewSearchBar: {
        width: '70%',
        height: 70
    },

    searchBar: {
        height: 40,
        backgroundColor: '#FF0000',
        borderColor: 'gray',
        padding: 10,
        borderWidth: 1,
        width: '100%'
    },

    viewButton: {
        width: '30%',
        height: 70,
        paddingLeft: 15
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

    viewMapView: {
        width: '100%',
        height: height - 70
    },

    mapView: {
        ...StyleSheet.absoluteFillObject,
        left: 3
    },
      
    place: {
        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20
    }
});

export default MapIndex;
