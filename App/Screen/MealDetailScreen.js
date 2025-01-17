import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../../Data/Dummy-data';
import MealDetails from '../Component/MealDetails';
import Subtitle from '../Component/MealDetail/Subtitle';
import List from '../Component/MealDetail/List';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../Component/IconButton';
import { FavoritesContext } from '../../Store/Context/favourites-Context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Store/Redux/favorites';

const MealDetailScreen = ({ route }) => {

    // const favouriteMealCtx = useContext(FavoritesContext)
    const favouriteMeals = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch()

    const { mealId } = route.params;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavourite = favouriteMeals.includes(mealId)

    if (!selectedMeal) {
        return (
            <View>
                <Text>Meal not found!</Text>
            </View>
        );
    }
    const navigation = useNavigation()
    function chaneFavouriteButton() {
        if (mealIsFavourite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavourite ? 'star' : 'star-outline'}
                        color='#fff'
                        onPress={chaneFavouriteButton}
                    />
                )
            }
        })
    }, [navigation, chaneFavouriteButton])

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