import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";


export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content"></StatusBar>
        <Text style={styles.textStyle}>Getting the fucking Weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
    },
    textStyle:{
        color: "#2c2c2c",
        fontSize: 30
    }
})