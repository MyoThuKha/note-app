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
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const HomePage = ({ navigation }) => {
  const data = useSelector((state) => state.mainData.data);

  // const updateNote = (note) => {
  //   setData(data.filter((item) => item.key != note.key));
  //   setData((data) => {
  //     return [note, ...data];
  //   });
  // };
  // const updateNote = (key, note) => {
  //   data.map((item) => {
  //     if (item.key === key) {
  //       item = note;
  //     }
  //   });
  // };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>My Notes</Text>
          <AntDesign name="filter" size={28} color="black" />
        </View>
        <View style={styles.searchbar}>
          <TextInput placeholder="Search Note" />
        </View>
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
  header: {
    marginTop: 50,
    marginBottom: 30,
    marginHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainTitle: {
    marginHorizontal: 20,
    fontSize: 28,
  },
  searchbar: {
    // margin: 20,
    marginHorizontal: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",

    borderRadius: 10,
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
