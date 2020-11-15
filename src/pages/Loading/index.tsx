import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import LogoImg from '../../images/Logo.png';

export default function AppLoading() {
    return (
        <View style={styles.container}>
            <Image source={LogoImg} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})