import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoriesScreen from './App/Screen/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreen from './App/Screen/MealsOverviewScreen';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetailScreen from './App/Screen/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './App/Screen/FavouriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoritesContextProvider from './Store/Context/favourites-Context';
import { Provider } from 'react-redux';
import { store } from './Store/Redux/Store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#5A2306FF' },
        headerTintColor: '#fff',
        drawerContainerStyle: { backgroundColor: '#5A2306D7' },
        drawerContentStyle: { backgroundColor: '#5A2306D7' },
        drawerActiveTintColor: '#5A2306FF',
        drawerInactiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#C17851FF'
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          )
        }}

      />
      <Drawer.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name='star' size={size} color={color} />
          )
        }} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#5A2306FF' },
              headerTintColor: '#fff',
              // contentStyle: { backgroundColor: '#5A2306D7' }
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
              options={({ route }) => {
                const catId = route.params.categoryId;
                return {
                  title: catId,
                };
              }}
            />
            <Stack.Screen name="MealDetailScreen" component={MealDetailScreen}
              options={{
                title: 'About The Meal'
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});