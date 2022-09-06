import { StyleSheet, View } from "react-native";

const Card = (props) => {
  const col = props.cardColor;
  return (
    <View style={[styles.card, { backgroundColor: col }]}>
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
    marginRight: 20,
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    backgroundColor: "white",
  },
});

export default Card;
