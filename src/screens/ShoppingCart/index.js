import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Carts from "../../data/cart";
import CartListItem from "../../components/CartListItem";
import { useSelector } from "react-redux";
import {
  subItemsTotal,
  selectDeliveryPrice,
  totalPrice,
} from "../../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const onCart = () => {
    console.log("Checkout");
  };
  const ShoppingCartFooter = useCallback(() => {
    const subTotal = useSelector(subItemsTotal);
    const deliveryPrice = useSelector(selectDeliveryPrice);
    const totalPriceNumber = useSelector(totalPrice);
    return (
      <View style={styles.footorContainer}>
        <View style={styles.innerFooter}>
          <Text style={styles.subText}>SubTotal</Text>
          <Text style={styles.subText}>{subTotal} US$</Text>
        </View>
        <View style={styles.innerFooter}>
          <Text style={styles.subText}>Delivery</Text>
          <Text style={styles.subText}>{deliveryPrice} US$</Text>
        </View>
        <View style={styles.innerFooter}>
          <Text style={styles.TotalText}>Total</Text>
          <Text style={styles.TotalText}>{totalPriceNumber} US$</Text>
        </View>
      </View>
    );
  }, []);
  return (
    <>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          ListFooterComponent={cartItems.length && ShoppingCartFooter}
        />
      </View>
      <Pressable onPress={onCart} style={styles.addtocart}>
        <Text style={styles.textCart}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  footorContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#e3e3e3",
  },
  innerFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subText: {
    fontSize: 13,
    color: "#8d8d8d",
  },
  TotalText: {
    color: "black",

    fontSize: 15,
    fontWeight: "bold",
  },
  addtocart: {
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    bottom: 20,
    padding: 20,
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
  },
  textCart: {
    color: "white",
  },
});
