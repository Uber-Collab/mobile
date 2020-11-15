import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import bannerImg from '../../images/Banner.png';
import buildingImg from '../../images/Predio.png';

import viagemImg from '../../images/Viagem.png';
import uberCollabImg from '../../images/Carro.png';
import deliveryImg from '../../images/Delivery.png';

import Search from '../../components/Search/index';
import LastTrip from '../../components/LastTrip/index';

export default function Landing() {
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image source={bannerImg} style={styles.banner} />
                <Image source={buildingImg} style={styles.building} />
            </View>

            <View style={styles.buttonContainer}>
                <RectButton style={styles.tripButton}>
                    <Image source={viagemImg} />
                </RectButton>

                <RectButton style={styles.uberCollabButton}>
                    <Image source={uberCollabImg} />
                </RectButton>

                <RectButton style={styles.deliveryButton}>
                    <Image source={deliveryImg} />
                </RectButton>
            </View>

            <View style={styles.searchContainer}>
                <Search />
            </View>

            <View style={styles.lastTripContainer}>
                <LastTrip />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    bannerContainer: {
        flexDirection: 'row',
    },

    banner: {
        width: '100%'
    },

    building: {
        top: 170,
        right: 130,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    tripButton: {
        padding: 20
    },

    uberCollabButton: {
        padding: 20
    },

    deliveryButton: {
        padding: 20
    },

    searchContainer: {
    },

    lastTripContainer: {
        justifyContent: 'center',
        padding: 20,
        top: 120,
    }
})