import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Avatar, Caption, Drawer, Paragraph, Switch, Text, Title, TouchableRipple } from 'react-native-paper';
//import FontAewsome from 'react-native-vector-icons/FontAewsome';
import FontAewsome from '@expo/vector-icons';

export function DrawerContent(props) {
    return (
        <View style={styles.containter}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfo}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://scontent.frec31-1.fna.fbcdn.net/v/t1.0-9/67477947_2446581972030578_1562550462819860480_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=Dm-vFyhYUwMAX-pFZ9o&_nc_ht=scontent.frec31-1.fna&oh=b079ccb690f05a67f82b7a69f820bdb6&oe=5F85BC18',
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Marvin Miguel</Title>
                                <Caption style={styles.caption}>marvin.atemu@gmail.com</Caption>
                            </View>
                        </View>
                        
                    </View>

                    <Drawer.Section>
                        <Drawer.Item 
                            icon='map'
                            label='Mapa'
                            onPress={() => props.navigation.navigate('Mapa')}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Drawer.Item 
                            icon='account'
                            label='Perfil'
                            onPress={() => props.navigation.navigate('Perfil')}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Drawer.Item 
                            icon='map-marker'
                            label='Meus Endereços'
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Drawer.Item 
                            icon='star'
                            label='Favoritos'
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Drawer.Item 
                            icon='settings'
                            label='Configurações'
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawer}>
                <Drawer.Item
                    icon="logout"
                    label="Logout"
                />
            </Drawer.Section>
        </View>
    )
};

const styles = StyleSheet.create({
    containter: {
        flex: 1
    },

    drawerContent: {
        flex: 1
    },

    userInfo: {
        paddingLeft: 20
    },

    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15,
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },

    bottomDrawer: {
        marginBottom: 15,
        borderTopColor: '#F4f4F4',
        borderTopWidth: 1
    }
})
