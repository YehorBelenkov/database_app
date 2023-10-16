import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './ListScreen';
import ProductScreen from './ProductScreen';
import ProductDetailScreen from './ProductDetailScreen';
import SQLite from 'react-native-sqlite-storage';

const Stack = createStackNavigator();

function App() {
  // Initialize and connect to the SQLite database
  useEffect(() => {
    const db = SQLite.openDatabase(
      { name: 'shoppingList.db', createFromLocation: '~shoppingList.db' },
      () => console.log('Database connected'),
      (error) => console.error('Error connecting to the database', error)
    );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Products" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;