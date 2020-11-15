import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import bannerImg from '../../images/Banner.png';
import buildingImg from '../../images/Predio.png';

import titleImg from '../../images/title.png';
import descriptionImg from '../../images/description.png';

import viagemImg from '../../images/Viagem.png';
import uberCollabImg from '../../images/Carro.png';
import deliveryImg from '../../images/Delivery.png';

import Search from '../../components/Search/index';
import LastTrip from '../../components/LastTrip/index';

export default function Landing() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('LoginUberCollab')
    }

    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image source={bannerImg} style={styles.banner} />
                <Image source={buildingImg} style={styles.building} />

                <Image source={titleImg} style={styles.title} />
                <Image source={descriptionImg} style={styles.description} />
            </View>

            <View style={styles.buttonContainer}>
                <RectButton style={styles.tripButton}>
                    <Image source={viagemImg} />
                </RectButton>

                <RectButton style={styles.uberCollabButton} onPress={navigateToLogin}>
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
            <View style={styles.lastTripContainer2}>
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
        width: '100%',
    },

    building: {
        top: 170,
        right: 130,
    },

    title: {
        right: 490,
        top: 90
    },

    description: {
        right: 645,
        top: 130
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
        alignItems: 'center',
    },
    lastTripContainer2: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 80
    }
})