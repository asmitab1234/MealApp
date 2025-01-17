import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../../Data/Dummy-data';
import { useEffect, useLayoutEffect } from 'react';
import MealsList from '../Component/MealList/MealsList';


function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((item) => {
        return item.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return (
        <MealsList items={displayMeals} />
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});