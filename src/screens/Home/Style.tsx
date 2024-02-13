import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection: 'column',
      borderWidth: 1,
      borderColor:  '#fff',
      padding: 20,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom: 10,
      backgroundColor: '#4d4d4d74'
    },
    inputContainer: {
      width: '80%',
      alignItems: 'center',
      flexDirection: 'column',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }
  });
  
  export default styles