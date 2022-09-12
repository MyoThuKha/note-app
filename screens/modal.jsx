import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import BottomButton from "../shared/button";

const ModalPage = ({ showModal, setShowModal }) => {
  return (
    <Modal visible={showModal} animationType="slide" backgroundColor={"black"}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fbfaff",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Card cardColor="white">
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 75,
                }}
              >
                <Octicons name="home" size={30} color="#93bffe" />
                <Text style={{ marginLeft: 30, fontSize: 22 }}>All</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card cardColor="white">
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 75,
                }}
              >
                <Ionicons name="today" size={30} color="#fcb460" />
                <Text style={{ marginLeft: 30, fontSize: 22 }}>Today</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Card cardColor="white">
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 75,
                }}
              >
                <MaterialIcons name="favorite" size={30} color="pink" />
                <Text style={{ marginLeft: 30, fontSize: 22 }}>Important</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <View style={styles.button}>
              <Ionicons name="arrow-back" size={24} color="green" />
              <Text style={styles.buttonText}>Go back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 125,
    height: 65,
    borderRadius: 40,
    shadowColor: "black",
    elevation: 4,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    marginVertical: 30,
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "green",
  },
});

export default ModalPage;
