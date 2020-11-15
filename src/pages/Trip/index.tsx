import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MapView from 'react-native-maps';

export default function Trip() {

    const [ region, setRegion ] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.0023,
                    longitudeDelta: 0.0014,
                })
            },
            () => {},
            {
                timeout: 3000,
                enableHighAccuracy: true,
                maximumAge: 3000,
            }
        )
    }, [])
    return (
        <View style={styles.container}>
           <MapView
                style={{ flex: 1 }}
                region={region}
                showsUserLocation
                loadingEnabled 
           />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    title: {
        fontSize: 32,
        padding: 25,
        top: 70
    },

    insertCpf: {
        borderColor: '#f0f0f0',
    }
})