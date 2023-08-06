import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  bgContainer: {
    height: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  secondaryContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 263,
  },
  formContainer: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    height: 50,
    marginBottom: 16,
    // padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    color: "rgba(33, 33, 33, 1)",
    // placeholderTextColor: "gray",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  lastInput: {
    width: "100%",
    marginBottom: 0,
  },
  passContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  showPass: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
    position: "absolute",
    right: 32,
  },
  photoContainer: { position: "absolute", top: -60, zIndex: 1 },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  photoIcon: {
    position: "absolute",
    bottom: 8,
    right: -12,
  },
  mainHeader: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontStyle: "normal",
    letterSpacing: 0.3,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 33,
  },
  mainButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 30,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },
  mainButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  mainButtonContainer: {
    marginTop: 43,
    marginBottom: 16,
  },
  redirectText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "rgba(27, 67, 113, 1)",
    textAlign: "center",
  },
});

export default styles;
