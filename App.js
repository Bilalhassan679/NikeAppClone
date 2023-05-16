import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Navigation from "./src/Navigation/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="auto" />
        </View>
      </ToastProvider>
    </Provider>
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
