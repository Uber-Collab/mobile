import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { RectButton, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import Animated from 'react-native-reanimated';
import uberCollabImg from '../../images/Carro.png';

var isHidden = true;
const state = {
    bounceValue: new Animated.Value(100),  //This is the initial position of the subview
    buttonText: "Show Subview"
  };

  function _toggleSubview() {    
    state.buttonText =  !isHidden ? "Show Subview" : "Hide Subview"    ;

    var toValue = 100;

    if(isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    // Animated.spring(
    //   state.bounceValue,
    //   {
    //     toValue: toValue,
    //     velocity: 3,
    //     tension: 2,
    //     friction: 8,
    //   }
    // ).start();

    isHidden = !isHidden;
  }
export default function Trip() {

    const [region, setRegion] = useState({})

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
            () => { },
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
                showsUserLocation
                loadingEnabled
            />
            <View style={styles.container}>
                <Text style={styles.title2}>De onde?</Text>
                <Text style={styles.subText}>Caixa Economica Federal</Text>
                <Text style={styles.subText}>Av Dr. Belmino Correia, 491</Text>
                <Text style={styles.title2}>Para onde?</Text> 
                <Text style={styles.subText}>Caixa Economica Federal</Text>
                <Text style={styles.subText}>Av Dr. Belmino Correia, 491</Text>
                <Text style={styles.title2}>Horário</Text>
                <Text style={styles.subText}>Horário de Partida: 6:30</Text>
                <Text style={styles.subText}>Horário de Chegada: 7:40</Text>
                <Text style={styles.subText}></Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                    />
                
                <Text style={styles.title2}>Quem vai com você?</Text>
                <Text><Image source={uberCollabImg} /> Fulano</Text>
                <Text><Image source={uberCollabImg} /> Beltrano</Text>
                <Text><Image source={uberCollabImg} /> Ciclano</Text>
            </View>
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
    title2: {
        fontSize: 21,
    },
    subText: {
        marginLeft: 30,
        fontSize: 12
    },
    uberCollabButton: {
        padding: 20
    },

    insertCpf: {
        borderColor: '#f0f0f0',
    },
    button: {
      padding: 8,
    },
    buttonText: {
      fontSize: 17,
      color: "#007AFF"
    },
    subView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#FFFFFF",
      height: 100,
    }
})