import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Contact = ({ item }) => {
  return (
    <View style={styles.containerMere}>
      {/* image container view */}
      <View style={styles.containerImage}>
        <Image source={item.image} style={styles.image} />
      </View>
      {/* phone and name container view */}
      <View style={styles.containerText}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
        <Text style={{ color: "#999" }}>{item.phone}</Text>
      </View>
      {/* icon container view */}
      <View style={styles.containerIcon}>
        <FontAwesome name="phone" size={24} color="lightblue" />
        <MaterialCommunityIcons
          name="android-messages"
          size={24}
          color="lightblue"
        />
        <FontAwesome5 name="ellipsis-v" size={24} color="lightblue" />
      </View>
    </View>
  );
};

export default Contact;
const styles = StyleSheet.create({
  containerMere: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  containerImage: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  containerText: {
    flex: 4,
    marginVertical: 2,
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
  },
  containerIcon: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
