import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import ColorButton from "../shared/colorButton";
import { useState } from "react";
import BottomButton from "../shared/button";

const DetailPage = ({ route, navigation }) => {
  const { title, body, color, addNote } = route.params;

  const [localTitle, setNewTitle] = useState("");
  const [text, setText] = useState(body);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.head}>
          <Ionicons
            name="chevron-back"
            size={25}
            color="white"
            onPress={() => navigation.navigate("Home")}
          />
          {/* <Text style={styles.title}>{title}</Text> */}
          <TextInput
            style={styles.title}
            placeholder={title}
            placeholderTextColor="white"
            value={localTitle}
            onChangeText={(value) => {
              setNewTitle(value);
            }}
          />
          <Feather name="menu" size={25} color="white" />
        </View>
        <View style={styles.colorBar}>
          <ColorButton color="white" current={color} />
          <ColorButton color="#93bffe" current={color} />
          <ColorButton color="#eca7f8" current={color} />
          <ColorButton color="#f8a7ae" current={color} />
          <ColorButton color="#fcb460" current={color} />
          <ColorButton color="#727272" current={color} />
        </View>
        <View style={styles.body}>
          <View style={{ flex: 1 }}>
            <TextInput
              multiline
              style={styles.text}
              placeholder="About"
              value={text}
              onChangeText={(value) => {
                setText(value);
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 100 }}>
              <TouchableOpacity
                onPress={() => {
                  let tempTitle = localTitle;
                  if (localTitle === "") {
                    tempTitle = title;
                  }
                  addNote({ title: tempTitle, body: text, color: "#93bffe" });
                  navigation.pop();
                }}
              >
                <BottomButton text="+" />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity>
                <BottomButton text="save" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  text: {
    fontSize: 18,
  },
  colorBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 50,
    marginBottom: 50,
  },
});

export default DetailPage;
