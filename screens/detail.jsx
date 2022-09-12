import {
  View,
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
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../reducers/noteSlice";
import { updateNote } from "../reducers/noteSlice";
import moment from "moment/moment";

const DetailPage = ({ route, navigation }) => {
  const { title, body, color, id } = route.params;
  const dispatch = useDispatch();
  const [localTitle, setNewTitle] = useState("");
  const [text, setText] = useState(body);
  const [curColor, setColor] = useState(color);

  const headerColor = curColor === "white" ? "black" : "white";

  const getTime = () => {
    return moment().format("MM DD YYYY");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor: curColor }]}>
        <View style={styles.head}>
          <Ionicons
            name="chevron-back"
            size={25}
            color={headerColor}
            onPress={() => navigation.navigate("Home")}
          />
          {/* <Text style={styles.title}>{title}</Text> */}
          <TextInput
            style={styles.title}
            placeholder={title}
            placeholderTextColor={headerColor}
            value={localTitle}
            onChangeText={(value) => {
              setNewTitle(value);
            }}
          />
          <Feather name="menu" size={25} color={headerColor} />
        </View>
        <View style={styles.colorBar}>
          <ColorButton color="white" current={curColor} setColor={setColor} />
          <ColorButton color="#93bffe" current={curColor} setColor={setColor} />
          <ColorButton color="#eca7f8" current={curColor} setColor={setColor} />
          <ColorButton color="#f8a7ae" current={curColor} setColor={setColor} />
          <ColorButton color="#fcb460" current={curColor} setColor={setColor} />
          <ColorButton color="#727272" current={curColor} setColor={setColor} />
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
                  const generateId = Math.random().toString();
                  dispatch(
                    addNote({
                      title: tempTitle,
                      body: text,
                      color: curColor,
                      key: generateId,
                      date: getTime(),
                    })
                  );
                  navigation.pop();
                }}
              >
                <BottomButton text="+" />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  let tempTitle = localTitle;
                  if (localTitle === "") {
                    tempTitle = title;
                  }
                  dispatch(
                    updateNote({
                      title: tempTitle,
                      body: text,
                      color: curColor,
                      key: id,
                      date: getTime(),
                    })
                  );
                  navigation.pop();
                }}
              >
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
