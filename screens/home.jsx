import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Card from "../shared/card";

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([
    { title: "hello", body: "world", color: "#eca7f8", key: "1" },
    { title: "cool", body: "weather", color: "#93bffe", key: "2" },
    { title: "Tea", body: "free to the world", color: "#fcb460", key: "3" },
    { title: "math", body: "2+2=5?", color: "pink", key: "4" },
    { title: "super", body: "man", color: "pink", key: "5" },
    { title: "super", body: "man2", color: "pink", key: "6" },
  ]);

  const handleUpdateColor = (color, key) => {
    console.log(key);
    // data.map((item) => {
    //   if (item.key === key) {
    //     item.color = color;
    //   }
    // });
    // current.color = color;
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainTitle}>My Notes</Text>
        <View style={styles.list}>
          <FlatList
            data={data}
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", {
            title: "New Note",
            body: "",
            color: "",
          });
        }}
      >
        <View style={styles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>+ Create Note</Text>
        </View>
      </TouchableOpacity>
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
  button: {
    marginHorizontal: 20,
    marginVertical: 25,
    paddingVertical: 15,
    backgroundColor: "orange",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default HomePage;
