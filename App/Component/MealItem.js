import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

const MealItem = ({ title, imageUrl, duration, complexity, affordability, id }) => {
  const navigation = useNavigation()

  function mealHendeler() {
    navigation.navigate('MealDetailScreen', {
      mealId: id,
    });
  }

  return (
    <View
      style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={mealHendeler}
      >

        <Image source={{ uri: imageUrl }}
          style={styles.imageStyl}
        />
        <Text
          style={styles.title}>
          {title}
        </Text>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />

      </Pressable>

    </View>

  )
}

export default MealItem

const styles = StyleSheet.create({
  imageStyl: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#000'
  },
  mealItem: {
    paddingBottom: 25,
    borderRadius: 18,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  details: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  detailItem: {
    marginHorizontal: 5,
    fontSize: 10,
    color: '#000',
    fontWeight: 'medium'
  },
  buttonPressed: {
    opacity: 0.5,
  },
})
