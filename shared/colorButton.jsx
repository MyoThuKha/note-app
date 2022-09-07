import { StyleSheet, TouchableOpacity, View } from "react-native";

const ColorButton = ({ color, current, setColor }) => {
  if (color == current) {
    const borderColor = color === "white" ? "black" : "white";
    return (
      //current color box
      <View
        style={[
          styles.colorBox,
          { backgroundColor: color, borderWidth: 1, borderColor: borderColor },
        ]}
      ></View>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => {
        setColor(color);
      }}
    >
      <View style={[styles.colorBox, { backgroundColor: color }]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
});
export default ColorButton;
