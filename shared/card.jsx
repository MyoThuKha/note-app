import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 9,
    paddingHorizontal: 20,
  },
});

export default Card;
