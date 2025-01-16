import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
        color: 'black',
        textAlign:'center'
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    }
})