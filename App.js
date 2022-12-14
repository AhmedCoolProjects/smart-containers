import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import ContainerScreen from "./app/screens/ContainerScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerLeft: () => {
                return (
                  <Image
                    source={require("./assets/logo.jpg")}
                    style={{
                      width: 40,
                      height: 40,
                      marginLeft: 5,
                      borderRadius: 50,
                      resizeMode: "cover",
                    }}
                  />
                );
              },
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                  >
                    <Image
                      source={require("./assets/avatar.png")}
                      style={{
                        width: 40,
                        height: 40,
                        marginRight: 5,
                        borderRadius: 50,
                        resizeMode: "cover",
                      }}
                    />
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen
            name="Container"
            component={ContainerScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
          <Stack.Screen
            name="Detail"
            component={DetailsScreen}
            options={({ route }) => ({
              title: route.params.name + " Details",
            })}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
