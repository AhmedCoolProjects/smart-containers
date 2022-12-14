import { StyleSheet, Text, View } from "react-native";
import DATA_CONTAINERS from "../../data-containers.json";
import { LinearGradient } from "expo-linear-gradient";

const DetailsScreen = ({ navigation, route }) => {
  const { name, id } = route.params;

  const container = DATA_CONTAINERS.find((container) => container.id === id);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#fff", "#bdc3c7", "#2c3e50"]}
        style={styles.linearGradient}
        locations={[0, 0.4, 1]}
      >
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>{container.hum}</Text>
            <Text style={styles.description}>Air Humidity</Text>
          </View>
          <View style={styles.subContainer}>
            <View style={styles.element}>
              <Text style={styles.title}>{container.inTemp}</Text>
              <Text style={styles.description}>Inside Temp</Text>
            </View>
            <View
              style={{
                ...styles.element,
                borderTopColor: "black",
                borderTopWidth: 1,
              }}
            >
              <Text style={styles.title}>{container.outTemp}</Text>
              <Text style={styles.description}>Outside Temp</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  subContainer: {
    width: "45%",
    height: 300,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: "1%",
    position: "relative",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  element: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
  },
  description: {
    fontSize: 20,
    fontWeight: "500",
    color: "gray",
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default DetailsScreen;
