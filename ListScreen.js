import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const ListScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const db = SQLite.openDatabase(
        { name: 'shoppingList.db', createFromLocation: '~shoppingList.db' },
        () => {
          db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM Products',
              [],
              (tx, results) => {
                const rows = results.rows.raw();
                if (rows && rows.length > 0) {
                  setProducts(rows);
                } else {
                  console.error('No products found in the database.');
                }
              },
              (error) => console.error('Error fetching products', error)
            );
          });
        },
        (error) => console.error('Error connecting to the database', error)
      );
    }, []);
  
    return (
      <View>
        <Text>List Screen</Text>
        {products.map((product) => (
          <Text key={product._id}>{product.name}</Text>
        ))}
        <Button title="View Products" onPress={() => navigation.navigate('Products')} />
      </View>
    );
  };

export default ListScreen;