import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Products from "../data/products";

const ProductDetailsScreen = () => {
  const products = Products[0];
  return (
    <View>
      {/* Image Crousal */}
      <Image
        style={styles.image}
        source={{
          uri: products?.image,
        }}
      />
      {/* Title */}
      {/* Price */}
      {/* Description */}
      {/* Add to Cart  */}
      {/* Navigation icon       */}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
