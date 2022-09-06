import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Card from "../shared/card";
const dummyData = [
  { title: "hello", body: "world", key: "1" },
  { title: "cool", body: "weather", key: "2" },
  { title: "Tea", body: "free to the world", key: "3" },
  { title: "math", body: "2+2=5?", key: "4" },
  { title: "super", body: "man", key: "5" },
];
const HomePage = () => {
  return (
    <View>
      <Text style={styles.mainTitle}>My Notes</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={dummyData}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Card>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 15,
  },
});

export default HomePage;
