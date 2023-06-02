import { StyleSheet } from "react-native";

export const IncDecContainerStyle = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 18,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      button: {
        backgroundColor: '#FF6060',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#FFFFFF',
      },
      input: {
        width: 80,
        height: 50,
        borderWidth: 0.3,
        borderColor: '#FF6060',
      },
});
