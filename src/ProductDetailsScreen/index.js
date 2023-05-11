import {
  Image,
  StyleSheet,
  FlatList,
  View,
  useWindowDimensions,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import Products from "../data/products";
import { ScrollView } from "react-native";

const ProductDetailsScreen = () => {
  const { width } = useWindowDimensions();
  const products = Products[0];

  const onCart = () => {
    console.log("Add to Cart");
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image Crousal */}

        <FlatList
          data={products?.images}
          renderItem={({ item }) => {
            return (
              <Image
                style={{ aspectRatio: 1, width: width }}
                source={{ uri: item }}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={styles.detailContainer}>
          {/* Title */}
          <Text style={styles.title}>{products?.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${products?.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{products?.description}</Text>
        </View>
        {/* Add to Cart  */}
        {/* Navigation icon       */}
      </ScrollView>
      <Pressable onPress={onCart} style={styles.addtocart}>
        <Text style={styles.textCart}>Add To Cart</Text>
      </Pressable>
    </>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  detailContainer: {
    padding: 10,
    paddingBottom: 100,
  },
  image: {
    width: 300,
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    color: "black",
  },
  price: {
    fontWeight: "500",
    fontSize: 15,
    letterSpacing: 1.5,
  },
  description: {
    fontSize: 15,
    lineHeight: 30,
    marginVertical: 10,
    fontWeight: 300,
  },
  addtocart: {
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    bottom: 20,
    padding: 20,
    alignItems: "center",
    borderRadius: 50,
  },
  textCart: {
    color: "white",
  },
});
