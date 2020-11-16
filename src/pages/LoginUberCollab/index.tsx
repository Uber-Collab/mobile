import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import cancelImg from '../../images/Cancel.png';

export default function LoginUberCollab() {
    const navigation = useNavigation();

    function cancel() {
        navigation.navigate('Landing')
    }

    function navigateToUberCollabInterface() {
        navigation.navigate('Loading')
    }
    
    return (
        <View style={styles.container}>
            <RectButton style={styles.cancelButton} onPress={cancel}>
                <Image source={cancelImg} />
            </RectButton>

            <Text style={styles.title}>
                Menos trânsito & {"\n"}
                Mais mobilidade & {"\n"}
                Menos stress
            </Text>

            <Text style={styles.cpfText}>CPF</Text>
            <TextInput style={styles.insertCpf} autoFocus></TextInput>

            <RectButton style={styles.continueButton} onPress={navigateToUberCollabInterface}>
                <Text style={styles.textButton}>Continue</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    cancelButton: {
        top: 50,
        left: 30
    },

    title: {
        fontSize: 32,
        padding: 25,
        top: 70
    },

    cpfText: {
        marginTop: 100,
        left: 20
    },

    insertCpf: {
        height: 54,
        width: '90%',
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },

    continueButton: {
        height: 54,
        width: '90%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 60
    },

    textButton: {
        color: '#fff',
        fontSize: 18
    }
})