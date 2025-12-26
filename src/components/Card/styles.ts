import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    width: 332,
    height: 466,
    marginBottom: 16,
    position: "relative",
  },

  aux: {
    width: 318,
    height: 454,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 32,
    backgroundColor: "#fff",
    position: "absolute",
  },

  card1: {
    right: 12,
    top: 12,
  },

  card2: {
    right: 6,
    top: 6,
  },

  card3: {
    right: 0,
    top: 0,
  },

  text: {
    width: "100%",
  },
});

export default styles;