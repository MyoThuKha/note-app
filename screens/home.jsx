import { useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import Card from "../shared/card";
import BottomButton from "../shared/button";

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([
    { title: "hello", body: "world", color: "#eca7f8", key: "1" },
    { title: "cool", body: "weather", color: "#93bffe", key: "2" },
    { title: "Tea", body: "free to the world", color: "#fcb460", key: "3" },
    { title: "math", body: "2+2=5?", color: "pink", key: "4" },
    { title: "super", body: "man", color: "pink", key: "5" },
    { title: "super", body: "man2", color: "pink", key: "6" },
  ]);

  const updateColor = (color, key) => {
    data.map((item) => {
      if (item.key === key) item.color = color;
    });
  };
  const addNote = (note) => {
    //this is not the best method for creating id
    const id = Math.random();
    note.key = id.toString();
    setData((data) => {
      return [note, ...data];
    });
  };
  const updateNote = (key, note) => {};
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainTitle}>My Notes</Text>
        <TextInput placeholder="Search Note" styles={styles.searchbar} />
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
                    id: item.key,
                    addNote: addNote,
                    updateNote: updateNote,
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
            color: "#93bffe",
            addNote: addNote,
          });
        }}
      >
        <BottomButton text="+ Create Note" />
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
  searchbar: {
    height: 30,
    margin: 20,
    backgroundColor: "white",
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
