import React, { useState } from "react";
import { Text, View, Animated, ImageBackground } from 'react-native';
import MyStylesheet from "../../Components/MyStylesheet";

export default function Splash({ route, navigation }) {

    const [animation, setAnim] = useState(new Animated.Value(1))
    const image = require('../../assets/Backgrounds/Splash.jpg')

    Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true
    }).start();

    setTimeout(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Menu principal', params: { user: route.params.pseudo } }],
        })
    }, 1300);

    return (
        <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
            <Animated.View style={[MyStylesheet.mainViewContainer, { paddingHorizontal: 20 }]}>
                <Animated.View style={{ flexDirection: 'row', alignItems: 'center', opacity: animation }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View>
                        <Text style={{ width: 200, textAlign: 'center', fontSize: 28 }}>Bienvenue, {route.params.pseudo}</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </Animated.View>
            </Animated.View>
        </ImageBackground>
    )

}