import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    component : {
        width: '100%',
        backgroundColor : 'grey',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10 , 
        borderRadius: 5
    },

    text : {
    flex:1,
    color: 'white',
    fontSize: 16,
    marginLeft: 16
   }, 

   buttonText: {
    color: 'white',
    fontSize: 16
    },

    button: {
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5
    },
});