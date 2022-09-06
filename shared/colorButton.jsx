import { StyleSheet, View } from "react-native";

const ColorButton = ({ color, current }) => {
  if (color == current) {
    return (
      <View
        style={[
          styles.colorBox,
          { backgroundColor: color, borderWidth: 1, borderColor: "white" },
        ]}
      ></View>
    );
  }
  return <View style={[styles.colorBox, { backgroundColor: color }]}></View>;
};

const styles = StyleSheet.create({
  colorBox: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
});
export default ColorButton;
