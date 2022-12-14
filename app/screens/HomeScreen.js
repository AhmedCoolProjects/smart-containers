import { StyleSheet, View } from "react-native";
import { ContainerCard } from "../components/ContainerCard";
import DATA_CONTAINERS from "../../data-containers.json";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#fff", "#bdc3c7", "#2c3e50"]}
        style={styles.linearGradient}
        locations={[0, 0.4, 1]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            height: 200,
          }}
        >
          {DATA_CONTAINERS.slice(0, 2).map((container) => (
            <ContainerCard
              navigation={navigation}
              key={container.id}
              name={container.name}
              id={container.id}
              location={container.location}
            />
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            height: 200,
          }}
        >
          {DATA_CONTAINERS.slice(2).map((container) => (
            <ContainerCard
              navigation={navigation}
              key={container.id}
              name={container.name}
              id={container.id}
              location={container.location}
            />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    width: "50%",
    height: 250,
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});

export default HomeScreen;
