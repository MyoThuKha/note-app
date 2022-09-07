import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.card, { backgroundColor: props.cardColor }]}>
      <View style={styles.container}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 40,
    marginVertical: 20,
    borderRadius: 9,
  },
  container: {
    padding: 20,
    marginRight: 30,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0,
  },
});

export default Card;
