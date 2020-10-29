import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function BigButton({ icon, color, size, onPress }) {
    return (
        <TouchableOpacity style={[styles.button, styles.bigButton]} onPress={onPress}>
            <FontAwesome
                name={icon}
                color={color}
                style={{
                    fontSize: size
                }}
            />
        </TouchableOpacity>
    );
}

export function SmallButton({ icon, color, size, onPress }) {
    return (
        <TouchableOpacity style={[styles.button, styles.smallButton]} onPress={onPress}>
            <FontAwesome
                name={icon}
                color={color}
                style={{
                    fontSize: size
                }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        shadowColor: "#333",
        shadowOpacity: .15,
        elevation: 7.5,
    },
    bigButton: {
        width: 70,
        height: 70,
    },
    smallButton: {
        width: 40,
        height: 40,
    },
});