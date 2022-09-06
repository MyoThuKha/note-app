import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Card from "../shared/card";

const dummyData = [
  { title: "hello", body: "world", color: "#eca7f8", key: "1" },
  { title: "cool", body: "weather", color: "#93bffe", key: "2" },
  { title: "Tea", body: "free to the world", color: "#fcb460", key: "3" },
  { title: "math", body: "2+2=5?", color: "pink", key: "4" },
  { title: "super", body: "man", color: "pink", key: "5" },
  { title: "super", body: "man2", color: "pink", key: "6" },
];
const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainTitle}>My Notes</Text>
        <View style={styles.list}>
          <FlatList
            data={dummyData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detail", {
                    title: item.title,
                    body: item.body,
                    color: item.color,
                  })
                }
              >
                <Card cardColor={item.color}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfaff",
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  mainTitle: {
    paddingTop: 50,
    marginHorizontal: 20,
    marginBottom: 30,
    fontSize: 28,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  body: {
    color: "grey",
    fontSize: 15,
    paddingLeft: 2,
  },
});

export default HomePage;