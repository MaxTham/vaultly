import { BorderRadius } from "./../node_modules/lightningcss/node/ast.d";
import { StyleSheet } from "react-native";
import Colors from "./colors";
import { TextSize } from "./global";

const OnboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 100,
    paddingHorizontal: 16,
  },
  icon: {
    width: 100,
    height: 120,
    marginBottom: 20,
  },
  h1: {
    color: "#ffffff",
    fontSize: TextSize.large,
    textAlign: "center",
    paddingVertical: 10,
  },
  p: {
    color: "#ffffff",
    fontSize: TextSize.small,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  google: {
    backgroundColor: Colors.button_red,
    borderRadius: 20,
    marginVertical: 15,
  },
  email: {
    backgroundColor: Colors.button_blue,
    borderRadius: 20,
    marginVertical: 15,
  },
  footer_container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  footer_text: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: TextSize.small,
    alignItems: "center",
    display: "flex",
  },
  policy_text: {
    color: Colors.button_blue,
    fontSize: TextSize.small,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    textDecorationLine: "underline",
  },
});

export { OnboardingStyle };
