import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../store/cartSlice";
const CartListItem = ({ cartItem }) => {
  const products = useSelector((state) => state?.products.setSelectedProducts);
  const dispatch = useDispatch();
  const addQuantity = useCallback(() => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productsId: cartItem?.products?.id,
        add: 1,
      })
    );
    // setQuantity((prev) => prev + 1);
    // dispatch(cartSlice.actions.addCartItem({ products }));
  }, [cartItem?.quantity]);
  const subQuantity = useCallback(() => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productsId: cartItem?.products?.id,
        add: -1,
      })
    );
    // setQuantity((prev) => prev - 1);
    // dispatch(cartSlice.actions.addCartItem({ products }));
  }, [cartItem]);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: cartItem?.products?.image }} />
      <View style={styles.midContainer}>
        <View>
          <Text style={styles.title}>{cartItem?.products?.name}</Text>
          <Text style={styles.description}>
            size : {cartItem.products?.sizes[0]}
          </Text>
        </View>
        <View style={styles.cartBtn}>
          <TouchableHighlight onPress={subQuantity}>
            <AntDesign name="minuscircleo" size={20} color="black" />
          </TouchableHighlight>
          <Text style={{ ...styles.priceText, padding: 5 }}>
            {cartItem?.quantity}
          </Text>
          <TouchableHighlight onPress={addQuantity}>
            <AntDesign name="pluscircleo" size={20} color="black" />
          </TouchableHighlight>
          <View style={styles.price}>
            <Text style={styles.priceText}>
              {cartItem?.quantity * cartItem?.products?.price}
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
