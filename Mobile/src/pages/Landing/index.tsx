import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import landingImg from '../../images/Banner.png';

export default function Landing() {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  