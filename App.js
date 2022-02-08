import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Contact from "./components/contact";

export default function App() {
  const contacts = [
    {
      name: "lampe",
      phone: "0122223445",
      image: require("./assets/photo3.jpg"),
    },
    {
      name: "lune",
      phone: "444556677",
      image: require("./assets/photo1.jpg"),
    },
    {
      name: "soleil",
      phone: "30934996",
      image: require("./assets/photo2.jpg"),
    },
    {
      name: "moon1",
      phone: "93298329832",
      image: require("./assets/moon1.jpg"),
    },
    {
      name: "moon2",
      phone: "998458934",
      image: require("./assets/moon2.jpg"),
    },
    {
      name: "moon3",
      phone: "945984598",
      image: require("./assets/moon1.jpg"),
    },
    {
      name: "moon4",
      phone: "9034943289",
      image: require("./assets/moon5.jpg"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        // renderItem={({ item }) => <Contact item={item} />}
        renderItem={({ item }) => <Contact item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
