import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginUberCollab() {
    return (
        <View style={styles.container}>
            <Text>
                Menos trânsito 
                Mais mobilidade 
                Menos stress
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})