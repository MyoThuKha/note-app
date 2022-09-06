import { View, Text, Button, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const DetailPage = ({ route, navigation }) => {
  const { title, body, color } = route.params;
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.head}>
        <Ionicons
          name="chevron-back"
          size={25}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={styles.title}>{title}</Text>
        <Feather name="menu" size={25} color="white" />
      </View>
      <View style={styles.body}>
        <Text>{body}</Text>
        <Text>{color}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#93bffe",
  },
  head: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  body: {
    flex: 1,
    backgroundColor: "#fbfaff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 24,
    color: "white",
  },
});

export default DetailPage;
