import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../../Data/Dummy-data';
import MealItem from '../Component/MealItem';
import { useEffect, useLayoutEffect } from 'react';


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



    function renderItem(itemData) {
        // console.log('Render Item Data:', itemData.item); // Debug the item data
        const item = itemData.item

        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return <MealItem {...mealItemProps} />;
    }
    return (
        <View style={styles.container}>
            {/* <Text>Meals Overview Screen - {catId}</Text>  */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={displayMeals}
                keyExtractor={(item) => item.id} // Ensure id is used correctly
                renderItem={renderItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});