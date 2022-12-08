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
    paddingVertical: 30,
  },
  mainTitle: {
    fontFamily: 'GochiHand-Regular',
    fontSize: 98,
    marginTop: 50,
    marginBottom: 10,
  },
  gochi: {
    fontFamily: 'GochiHand-Regular',
  },
  accountInput: {
    width: 200,
    height: 50,
    marginVertical: 30,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  listItem: {
    padding: 25
  },
  boutonJouer: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom:-20,
    borderRadius: 100,
    backgroundColor: '#726da8',
  },
  boutonMenu: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    marginHorizontal:40,
    backgroundColor: '#594157',
  },
  flag: {
    width:300,
    height:200,
    marginBottom:30,
    resizeMode: 'contain'
  },
  gameView:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection:"row",
    justifyContent: 'space-between',
  },
  gameInput: {
    width: 200,
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingHorizontal:20,
  }
});

export default MyStylesheet;
export { useFonts };