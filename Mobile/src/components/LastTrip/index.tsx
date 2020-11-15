import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function LastTrip() {
    return (
        <View style={styles.container}>
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
        flex: 1
    },

    locationButton: {},

    addressButton: {}
})