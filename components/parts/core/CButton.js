import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';


export default function CButton(props) {
    return (
        <Pressable
            style = {{ ...styles.button ?? {}, ...props.style }}
            onPress = {props.onPress}    
        >
            <Text style={styles.text}>{props.title}</Text>
        </Pressable> 
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginVertical: 2,
        paddingVertical: 20,
        backgroundColor: '#FF4500',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
    }
});