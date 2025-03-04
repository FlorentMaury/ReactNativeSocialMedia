import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileStatistics } from "../components/ProfileStatistics";
import { AddedImages } from "../components/AddedImages";
import { FavoritedImages } from "../components/FavoritedImages";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Profile = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: -210,
          left: -120,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#EEF2E2",
          position: "absolute",
          top: -260,
          left: -120,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View
        style={{
          width: 650,
          height: 570,
          borderRadius: 155,
          borderWidth: 1,
          borderColor: "#E1F6F4",
          position: "absolute",
          top: -260,
          left: -120,
          transform: [{ rotate: "-45deg" }],
        }}
      />
      <View style={{ paddingTop: 50 }}>
        <View
          style={{
            width: 96,
            height: 96,
            borderRadius: 35,
            borderColor: "#000",
            borderWidth: 1,
            transform: [{ rotate: "-45deg" }],
            alignSelf: "center",
          }}
        />
        <View
          style={{
            overflow: "hidden",
            alignSelf: "center",
            transform: [{ rotate: "-45deg" }],
            borderRadius: 35,
            height: 87,
            width: 87,
            marginTop: -92,
          }}
        >
          <Image
            style={{
              height: 105,
              width: 105,
              transform: [{ rotate: "45deg" }],
              alignSelf: "center",
            }}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 26,
            alignSelf: "center",
            marginTop: 30,
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 16,
            alignSelf: "center",
            marginTop: 10,
          }}
        >
          @johndoe
        </Text>
      </View>
      <ProfileStatistics />
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Ionicons name="image-outline" size={30} color="black" />
          <AddedImages />
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="bookmark-outline" size={30} color="black" />
          <FavoritedImages />
        </View>
      </View>
    </SafeAreaView>
  );
};
