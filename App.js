import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, View } from "react-native";
import ProductDetailsScreen from "./src/ProductDetailsScreen";
import CartListItem from "./src/components/CartListItem";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductDetailsScreen /> */}
      {/* <CartListItem /> */}
      <ShoppingCart />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  imageContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
