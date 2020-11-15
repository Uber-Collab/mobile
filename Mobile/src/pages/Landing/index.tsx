import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import bannerImg from '../../images/Banner.png';
import buildingImg from '../../images/Predio.png';

export default function Landing() {
    return (
        <View style={styles.container}>
            <View style={styles.bannerContainer}>
                <Image source={bannerImg} style={styles.banner} />
                <Image source={buildingImg} style={styles.building} />
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
    }
})