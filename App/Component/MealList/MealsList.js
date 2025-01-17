import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../MealItem';


function MealsList({ items }) {

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
                data={items}
                keyExtractor={(item) => item.id} // Ensure id is used correctly
                renderItem={renderItem}
            />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});