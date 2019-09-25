import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';
import { COLORS } from '../../common';
class Button extends Component {

    render() {
        const { title, onPress, style } = this.props
        return (
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <Text>{title}</Text>
            </TouchableOpacity>
        );
    }
}

export { Button }


const styles = StyleSheet.create({
    container: {
        height: 45,
        width: "70%",
        backgroundColor: COLORS.main,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    }
})