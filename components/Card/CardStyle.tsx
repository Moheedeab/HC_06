import { center } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";

export const CardStyle = StyleSheet.create({
    container: {
      width:170,
      height:170,
      margin:10,
      alignItems:"center",
      justifyContent:"flex-end",
      backgroundColor: '#fff',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      
      },
      image: {
        height: 120,
        width: 120,
         
      },

});
