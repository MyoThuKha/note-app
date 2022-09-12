import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import BottomButton from "../shared/button";
import { useSelector } from "react-redux";
import moment from "moment/moment";

const ModalPage = ({ showModal, setShowModal, setData }) => {
  const reduxData = useSelector((state) => state.mainData.data);

  const getTime = () => {
    return moment().format("MM DD YYYY");
  };
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
          <TouchableOpacity
            onPress={() => {
              setData(reduxData);
              setShowModal(false);
            }}
          >
            <Card cardColor="#93bffe">
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
          <TouchableOpacity
            onPress={() => {
              setData(reduxData.filter((item) => item.date === getTime()));
              setShowModal(false);
            }}
          >
            <Card cardColor="orange">
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 75,
                }}
              >
                <Ionicons name="today" size={30} color="orange" />
                <Text style={{ marginLeft: 30, fontSize: 22 }}>Today</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              //Implement here
              setShowModal(false);
            }}
          >
            <Card cardColor="pink">
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
              <Ionicons name="arrow-back" size={20} color="green" />
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
