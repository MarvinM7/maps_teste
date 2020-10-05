//import liraries
import React, { Component } from 'react';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import openDialler from '../../functions/openDialler';
import openWhatsapp from '../../functions/openWhatsapp';
import openInstagram from '../../functions/openInstagram';

class FavoritesIndex extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.titleText}>Estabelecimentos favoritos</Text>
                </View>
                <ScrollView style={styles.scrollViewItem}>
                    <View style={styles.item}>
                        <View style={styles.viewItemTitle}>
                            <View style={{width: '90%'}}>
                                <Text style={styles.itemName}>Nome Tamanho Fonte</Text>
                                <Text style={styles.itemBusinessHours}>Seg/Sáb: 15h às 23h</Text>
                                <Text style={styles.itemBusinessHours}>Dom: 18h às 23h</Text>
                            </View>
                            <View style={styles.viewFavoriteIcon}>
                                <FontAwesome style={{alignItems: 'flex-end'}} name={'heart'} size={30} color={'green'} onPress={()=> console.log()} />
                            </View>
                        </View>
                        <View style={styles.viewItemContact}>
                            <FontAwesome style={{marginRight: 15}} name={'phone'} size={30} color={'green'} onPress={()=> openDialler('81988360455')} />
                            <FontAwesome style={{marginRight: 15}} name={'whatsapp'} size={30} color={'green'} onPress={()=> openWhatsapp('5581988360455')} />
                            <FontAwesome style={{marginRight: 15}} name={'instagram'} size={30} color={'green'} onPress={()=> openInstagram('marvinm7')} />
                            <FontAwesome style={{marginRight: 15}} name={'facebook'} size={30} color={'green'} onPress={()=> openWhatsapp('')} />
                        </View>
                        <Text style={styles.itemStreet}>Rua Delfim Fernandes Amorim, 115-B</Text>
                        <Text style={styles.itemDistrict}>Curado II</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.viewItemTitle}>
                            <View style={{width: '90%'}}>
                                <Text style={styles.itemName}>Nome Tamanho Fonte</Text>
                                <Text style={styles.itemBusinessHours}>Seg/Sáb: 15h às 23h</Text>
                                <Text style={styles.itemBusinessHours}>Dom: 18h às 23h</Text>
                            </View>
                            <View style={styles.viewFavoriteIcon}>
                            <FontAwesome style={{alignItems: 'flex-end'}} name={'heart'} size={30} color={'green'} onPress={()=> console.log()} />
                            </View>
                        </View>
                        <View style={styles.viewItemContact}>
                        <FontAwesome style={{marginRight: 15}} name={'phone'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'whatsapp'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'instagram'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'facebook'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                        </View>
                        <Text style={styles.itemStreet}>Rua Delfim Fernandes Amorim, 115-B</Text>
                        <Text style={styles.itemDistrict}>Curado II</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.viewItemTitle}>
                            <View style={{width: '90%'}}>
                                <Text style={styles.itemName}>Nome Tamanho Fonte</Text>
                                <Text style={styles.itemBusinessHours}>Seg/Sáb: 15h às 23h</Text>
                                <Text style={styles.itemBusinessHours}>Dom: 18h às 23h</Text>
                            </View>
                            <View style={styles.viewFavoriteIcon}>
                            <FontAwesome style={{alignItems: 'flex-end'}} name={'heart'} size={30} color={'green'} onPress={()=> console.log()} />
                            </View>
                        </View>
                        <View style={styles.viewItemContact}>
                        <FontAwesome style={{marginRight: 15}} name={'phone'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'whatsapp'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'instagram'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'facebook'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                        </View>
                        <Text style={styles.itemStreet}>Rua Delfim Fernandes Amorim, 115-B</Text>
                        <Text style={styles.itemDistrict}>Curado II</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.viewItemTitle}>
                            <View style={{width: '90%'}}>
                                <Text style={styles.itemName}>Nome Tamanho Fonte</Text>
                                <Text style={styles.itemBusinessHours}>Seg/Sáb: 15h às 23h</Text>
                                <Text style={styles.itemBusinessHours}>Dom: 18h às 23h</Text>
                            </View>
                            <View style={styles.viewFavoriteIcon}>
                            <FontAwesome style={{alignItems: 'flex-end'}} name={'heart'} size={30} color={'green'} onPress={()=> console.log()} />
                            </View>
                        </View>
                        <View style={styles.viewItemContact}>
                        <FontAwesome style={{marginRight: 15}} name={'phone'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'whatsapp'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'instagram'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                            <FontAwesome style={{marginRight: 15}} name={'facebook'} size={30} color={'green'} onPress={()=> this.openWhatsapp('')} />
                        </View>
                        <Text style={styles.itemStreet}>Rua Delfim Fernandes Amorim, 115-B</Text>
                        <Text style={styles.itemDistrict}>Curado II</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.viewItemTitle}>
                            <View style={{width: '90%'}}>
                                <Text style={styles.itemName}>Nome Tamanho Fonte</Text>
                                <Text style={styles.itemBusinessHours}>Seg/Sáb: 15h às 23h</Text>
                                <Text style={styles.itemBusinessHours}>Dom: 18h às 23h</Text>
                            </View>
                            <View style={styles.viewFavoriteIcon}>
                            <FontAwesome style={{alignItems: 'flex-end'}} name={'heart'} size={30} color={'green'} onPress={()=> console.log()} />
                            </View>
                        </View>
                        <View style={styles.viewItemContact}>
                            <FontAwesome style={{marginRight: 15}} name={'phone'} size={30} color={'green'} onPress={()=> this.openWhatsapp(box.whatsapp)} />
                            <FontAwesome style={{marginRight: 15}} name={'whatsapp'} size={30} color={'green'} onPress={()=> this.openWhatsapp(box.whatsapp)} />
                            <FontAwesome style={{marginRight: 15}} name={'instagram'} size={30} color={'green'} onPress={()=> this.openWhatsapp(box.whatsapp)} />
                            <FontAwesome style={{marginRight: 15}} name={'facebook'} size={30} color={'green'} onPress={()=> this.openWhatsapp(box.whatsapp)} />
                        </View>
                        <Text style={styles.itemStreet}>Rua Delfim Fernandes Amorim, 115-B</Text>
                        <Text style={styles.itemDistrict}>Curado II</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },

    viewTitle: {
        top: 20,
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        borderTopWidth: 1,
        borderTopColor: 'green',
    },

    titleText: {
        fontSize: 25
    },

    scrollViewItem: {
        top: 20,
        width: '100%',
        backgroundColor: 'yellow'
    },

    item: {
        width: '90%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 40,
        padding: 20,
        marginBottom: 20,
        left: 20,
        right: 40
    },

    viewItemTitle: {
        flexDirection: 'row',
        marginBottom: 10
    },

    viewFavoriteIcon: {
        alignItems: 'flex-end'
    },

    itemName: {
        color: '#000',
        fontSize: 25,
    },

    itemBusinessHours: {
        color: '#000',
        fontSize: 12
    },

    itemContact: {
        color: '#000',
        fontSize: 20,
        marginBottom: 10
    },

    viewItemContact: {
        flexDirection: 'row',
        marginBottom: 10
    },

    itemStreet: {
        color: '#000'
    },

    itemDistrict: {
        color: '#000'
    }
});

//make this component available to the app
export default FavoritesIndex;
