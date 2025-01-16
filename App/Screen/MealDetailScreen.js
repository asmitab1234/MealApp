import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '../../Data/Dummy-data';
import MealDetails from '../Component/MealDetails';
import Subtitle from '../Component/MealDetail/Subtitle';
import List from '../Component/MealDetail/List';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../Component/IconButton';

const MealDetailScreen = ({ route }) => {
    const { mealId } = route.params;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    if (!selectedMeal) {
        return (
            <View>
                <Text>Meal not found!</Text>
            </View>
        );
    }
    const navigation = useNavigation()
    function buttonPressHandeler() {
        console.log('pressed!')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon='star' color='#fff' onPress={buttonPressHandeler} />
                )
            }
        })
    }, [navigation, buttonPressHandeler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
            />
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
        </ScrollView>
    );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'black', // Changed to black for better visibility
    },

    detailText: {
        fontSize: 16,
        margin: 4,
        color: 'black',
    },
});