import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ShoppingCart from "../screens/ShoppingCart";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { cartItemLength } from "../store/cartSlice";
const Navigation = () => {
  //Get CartItems-Length In Navigation
  const cartItems = useSelector(cartItemLength);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("ShoppingCart")}
                  style={{ flexDirection: "row", padding: 10 }}
                >
                  <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                  <Text
                    style={{
                      color: "red",
                      fontSize: 10,
                      marginLeft: 5,
                      fontWeight: 300,
                    }}
                  >
                    {cartItems}
                  </Text>
                </Pressable>
              );
            },
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailsScreen}
          options={({ navigation }) => ({
            presentation: "card",
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("ShoppingCart")}
                  style={{ flexDirection: "row", padding: 10 }}
                >
                  <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                  <Text
                    style={{
                      color: "red",
                      fontSize: 10,
                      marginLeft: 5,
                      fontWeight: 300,
                    }}
                  >
                    {cartItems}
                  </Text>
                </Pressable>
              );
            },
          })}
        />
        <Stack.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
