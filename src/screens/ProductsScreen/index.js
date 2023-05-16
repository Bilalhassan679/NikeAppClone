import { StyleSheet, FlatList, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import productsSlice from "../../store/productsSlice";
const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProducts(item.id));
            navigation.navigate("ProductDetail");
          }}
          style={styles.imageContainer}
        >
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
