import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Carts from "../../data/cart";
import CartListItem from "../../components/CartListItem";

const ShoppingCart = () => {
  const onCart = () => {
    console.log("Checkout");
  };
  const ShoppingCartFooter = useCallback(() => {
    return (
      <View style={styles.footorContainer}>
        <View style={styles.innerFooter}>
          <Text style={styles.subText}>SubTotal</Text>
          <Text style={styles.subText}>4100 US$</Text>
        </View>
        <View style={styles.innerFooter}>
          <Text style={styles.subText}>Delivery</Text>
          <Text style={styles.subText}>100 US$</Text>
        </View>
        <View style={styles.innerFooter}>
          <Text style={styles.TotalText}>Total</Text>
          <Text style={styles.TotalText}>42,00 US$</Text>
        </View>
      </View>
    );
  }, []);
  return (
    <>
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Carts}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          ListFooterComponent={ShoppingCartFooter}
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
