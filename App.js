import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Public Views */
import Comptes from './Screens/Public/Comptes'
import CreerCompte from './Screens/Public/CreerCompte'
import WelcomeScreen from './Screens/Public/WelcomeScreen'

/* Logged Views */
import HighScores from './Screens/Logged/HighScores'
import Jeu from './Screens/Logged/Jeu'
import Menu from './Screens/Logged/Menu'
import Settings from './Screens/Logged/Settings'
import Splash from './Screens/Logged/Splash'
import MyStylesheet from './Components/MyStylesheet';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>

          <Stack.Group>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Comptes" component={Comptes} />
            <Stack.Screen name="Créer un compte" component={CreerCompte} />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="Splash Screen" component={Splash} options={{ navigationOptions: { headerShown: false } }} />
            <Stack.Screen name="Menu principal" component={Menu} options={{ navigationOptions: { headerShown: false } }} />
            <Stack.Screen name="Jeu" component={Jeu} options={{ navigationOptions: { headerShown: false } }} />
            <Stack.Screen name="High Scores" component={HighScores} />
            <Stack.Screen name="Parametres" component={Settings} />
          </Stack.Group>

        </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
