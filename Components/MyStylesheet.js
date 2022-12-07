import { StyleSheet } from 'react-native';
import * as Font from "expo-font";


const useFonts = async () =>
  await Font.loadAsync({
    'GochiHand-Regular': require('../assets/Fonts/GochiHand-Regular.ttf')
});

const MyStylesheet = StyleSheet.create({
    mainViewContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:30,
    },
    mainTitle: {
        fontFamily:'GochiHand-Regular',
        fontSize:98,
        marginTop:50,
        marginBottom:10,
    },
    gochi: {
      fontFamily:'GochiHand-Regular',
    }
});

export default MyStylesheet;
export {useFonts};