import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ContainerScreen = ({ navigation, route }) => {
  const { name, id, location } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#fff", "#bdc3c7", "#2c3e50"]}
        style={styles.linearGradient}
        locations={[0, 0.4, 1]}
      >
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", { name: name, id: id })
            }
            activeOpacity={0.8}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              position: "relative",
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "white",
              borderColor: "black",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Image
              source={require("../../assets/sensor.png")}
              style={styles.image}
            />
            <Text style={styles.name}>Capteurs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => Linking.openURL(location)}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              position: "relative",
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "white",
              borderColor: "black",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              marginTop: 20,
            }}
          >
            <Image
              source={require("../../assets/map.png")}
              style={styles.image}
            />
            <Text style={styles.name}>Localisation</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
  },
  name: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default ContainerScreen;
