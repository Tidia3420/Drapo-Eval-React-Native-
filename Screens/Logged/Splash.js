import React, {useState} from "react";
import { Text, View, Animated} from 'react-native';
import MyStylesheet from "../../Components/MyStylesheet";

export default function Splash({ route, navigation }) {

    const [animation, setAnim] = useState(new Animated.Value(1))

    Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver:true
    }).start();

    setTimeout(() => {
        navigation.navigate('Menu principal', {user:route.params.pseudo})
      }, 1300);
      
    return (
        <Animated.View style={[MyStylesheet.mainViewContainer, {paddingHorizontal:20}]}>
            <Animated.View style={{ flexDirection: 'row', alignItems: 'center', opacity: animation }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={{ width: 200, textAlign: 'center', fontSize:28 }}>Bienvenue, {route.params.pseudo}</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </Animated.View>
        </Animated.View>
    )

}