import { Modal, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ModalPage = ({ showModal, setShowModal }) => {
  return (
    <Modal visible={showModal} animationType="slide">
      <AntDesign
        name="close"
        size={28}
        color="black"
        onPress={() => {
          setShowModal(false);
        }}
      />
      <Text>Today</Text>
      <Text>Favorite</Text>
    </Modal>
  );
};

export default ModalPage;
