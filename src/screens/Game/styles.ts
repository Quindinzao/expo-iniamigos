import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginBottom: 12,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 36,
    transform: [{ rotate: "180deg" }],
  },
});