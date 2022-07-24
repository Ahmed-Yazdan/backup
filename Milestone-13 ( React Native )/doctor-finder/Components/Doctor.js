import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    doctorName:{
        color: 'goldenrod',
        fontSize:25,
        textAlign:'center'
    }
})

export default function Doctor({ doctor }) {
    const { name, email, image } = doctor;
    return (
        <View>
            <Image
                style={{ width: 200, height: 200 }}
                source={{
                    uri: `data:image/png;base64,${image}`,
                }}
            />
            <Text style={styles.doctorName}>{name}</Text>
        </View>
    )
}