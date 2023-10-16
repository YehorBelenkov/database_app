import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Product Screen</Text>
      <Button
        title="View Product Details"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </View>
  );
};

export default ProductScreen;