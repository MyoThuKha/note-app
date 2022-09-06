import { View, Text, Button, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import ColorButton from "../shared/colorButton";

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
      <View style={styles.colorBar}>
        <ColorButton color="#93bffe" current={color} />
        <ColorButton color="#eca7f8" current={color} />
        <ColorButton color="#f8a7ae" current={color} />
        <ColorButton color="#fcb460" current={color} />
        <ColorButton color="#727272" current={color} />
      </View>
      <View style={styles.body}>
        <Text>{body}</Text>
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
  colorBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 50,
    marginBottom: 50,
  },
});

export default DetailPage;
