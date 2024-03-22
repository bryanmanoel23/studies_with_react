import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor : '#111111',
      padding: 24
    },
    View1 : {
      color: 'white',
      fontWeight: 'bold',
      marginTop: 48,
      fontSize:19
    },
    View2: {
      color: 'grey',
      fontSize: 16,
      
    },
    input: {
        flex: 1,
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        color:'white',
        padding: 16,
        fontSize: 16,
        marginRight: 12
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
        backgroundColor: 'green',
        borderRadius: 5
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    }, 
    componentEmpt: {
      color: 'white',
      textAlign: 'center',
      fontSize:16
    }
  })