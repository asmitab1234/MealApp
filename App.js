import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoriesScreen from './App/Screen/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native'
import MealsOverviewScreen from './App/Screen/MealsOverviewScreen'
import { createStackNavigator } from '@react-navigation/stack'
import MealDetailScreen from './App/Screen/MealDetailScreen'

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer >
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:'#5A2306FF'},
          headerTintColor:'#fff',
          // contentStyle: { backgroundColor: '#5A2306D7' }
        }}>
          <Stack.Screen name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
              headerStyle: { backgroundColor: '#5A2306FF' },
              headerTintColor: 'white',
            }} />
          <Stack.Screen name="MealsOverviewScreen"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId
              return {
                title: catId
              }
            }} />
          <Stack.Screen name='MealDetailScreen' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})