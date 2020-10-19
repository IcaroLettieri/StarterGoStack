import React from 'react';
import { Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.product.url }} />
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
    headerLeft: () => (null)
});

export default Product;