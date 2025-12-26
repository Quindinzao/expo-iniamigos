import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    width: 139,
    height: 197,
    marginBottom: 16,
    position: "relative", 
  },
  aux: {
    width: 135,
    height: 193,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    bottom: 0,
  },

  item: {
    width: 135,
    height: 193,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 0,
  },

  optionText: {
    width: "100%",
    textAlign: "center",
  },

  optionEmoji: {
    fontSize: 40,
    marginBottom: 12,
  }
});

export default styles;