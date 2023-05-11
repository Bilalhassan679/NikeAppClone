import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import Carts from "../data/cart";
import { AntDesign } from "@expo/vector-icons";
const CartListItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(1);
  const addQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, [quantity]);
  const subQuantity = useCallback(() => {
    setQuantity((prev) => prev - 1);
  }, [quantity]);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: cartItem?.product.image }} />
      <View style={styles.midContainer}>
        <View>
          <Text style={styles.title}>{cartItem?.product.name}</Text>
          <Text style={styles.description}>size : {cartItem?.size}</Text>
        </View>
        <View style={styles.cartBtn}>
          <TouchableHighlight onPress={subQuantity}>
            <AntDesign name="minuscircleo" size={20} color="black" />
          </TouchableHighlight>
          <Text style={{ ...styles.priceText, padding: 5 }}>{quantity}</Text>
          <TouchableHighlight onPress={addQuantity}>
            <AntDesign name="pluscircleo" size={20} color="black" />
          </TouchableHighlight>
          <View style={styles.price}>
            <Text style={styles.priceText}>
              {quantity * cartItem?.product.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 5,
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  midContainer: {
    justifyContent: "space-between",
    flex: 1,
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  description: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 15,
  },
  cartBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
});
