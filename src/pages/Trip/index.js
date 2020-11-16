import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {
  RectButton,
  ScrollView,
  TouchableHighlight,
} from "react-native-gesture-handler";
import MapView from "react-native-maps";
import Animated from "react-native-reanimated";
import uberCollabImg from "../../images/Carro.png";
import { TripDetails } from "./styles.js";

export default function Trip() {
  const [visible, setVisible] = useState(false);

  const [region, setRegion] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0023,
          longitudeDelta: 0.0014,
        });
      },
      () => {},
      {
        timeout: 3000,
        enableHighAccuracy: true,
        maximumAge: 3000,
      }
    );
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled
      />
      <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
        <TripDetails visible={visible} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    padding: 25,
    top: 70,
  },
  title2: {
    fontSize: 21,
  },
  subText: {
    marginLeft: 30,
    fontSize: 12,
  },
  uberCollabButton: {
    padding: 20,
  },

  insertCpf: {
    borderColor: "#f0f0f0",
  },
  button: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF",
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: 100,
  },
});
