import { StyleSheet, View, Text } from "react-native";

const BottomButton = (props) => {
  return (
    <View style={styles.button}>
      <Text style={{ color: "white", fontSize: 20 }}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginVertical: 25,
    paddingVertical: 15,
    backgroundColor: "#fcb460",
    borderRadius: 10,
    alignItems: "center",
  },
});
export default BottomButton;
