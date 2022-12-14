import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export const ContainerCard = ({ name, navigation, id, location }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Container", {
          name: name,
          id: id,
          location: location,
        })
      }
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "47%",
    position: "relative",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  name: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
});
