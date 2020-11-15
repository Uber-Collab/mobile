import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function LoginUberCollab() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Menos trânsito {"\n"}
                Mais mobilidade {"\n"}
                Menos stress
            </Text>

            <Text>CPF</Text>
            <TextInput style={styles.insertCpf}></TextInput>
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