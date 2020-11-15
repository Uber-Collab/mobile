import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import clockImg from '../../images/Relogio.png';

export default function LastTrip() {
    return (
        <View style={styles.container}>
            <Image source={clockImg} />
            
            <Text style={styles.locationButton}>
                Caixa Ecônimica Federal
            </Text>
            <Text style={styles.addressButton}>
                Av. Belmino Correia
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    locationButton: {
        fontSize: 20,
        paddingEnd: 10
    },

    addressButton: {
        fontSize: 15
    },
})