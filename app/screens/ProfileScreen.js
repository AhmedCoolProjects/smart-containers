import { Button, Image, Text, View } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 50,
      }}
    >
      <Image
        source={require("../../assets/avatar.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          resizeMode: "cover",
          alignSelf: "center",
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        Taha El Khayaty
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          color: "gray",
          marginBottom: 50,
        }}
      >
        taha.elkhayaty@esi.ac.ma
      </Text>

      <Button title="Logout" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ProfileScreen;
