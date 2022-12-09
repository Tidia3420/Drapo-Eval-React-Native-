import React, { useEffect, useState } from "react";
import { TouchableHighlight, Text, View, BackHandler, ImageBackground } from "react-native";
import AppLoading from 'expo-app-loading';
import MyStylesheet, { useFonts } from "../../Components/MyStylesheet";

export default function Menu({ route, navigation }) {
    const [IsReady, SetIsReady] = useState(false);
    const image = require('../../assets/Backgrounds/Earth2.jpg')
    const LoadFonts = async () => {
        await useFonts();
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => { navigation.navigate('Menu principal', { user: route.params.user }); return (true) });
    })

    if (!IsReady) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReady(true)}
                onError={() => { }}
            />
        );
    }

    return (
        <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
            <View style={MyStylesheet.mainViewContainer}>
                <View style={[MyStylesheet.mainViewContainer, { flex: 1 }]}>
                    <Text style={MyStylesheet.mainTitle}>Drapo</Text>
                    <Text style={MyStylesheet.gochi}>Le jeu pour mettre à l'épreuve</Text>
                    <Text style={MyStylesheet.gochi}>vos connaissances en géographie!</Text>
                </View>
                <TouchableHighlight
                    onPress={() => navigation.navigate('Jeu', { user: route.params.user })}
                    style={MyStylesheet.boutonJouer}>
                    <Text style={{fontSize:20}}>Jouer</Text>
                </TouchableHighlight>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableHighlight
                        onPress={() => { navigation.navigate('Paramètres', { user: route.params.user }); }}
                        style={MyStylesheet.boutonMenu}>
                        <Text>Paramètres</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => { navigation.navigate('High Scores', { user: route.params.user }) }}
                        style={MyStylesheet.boutonMenu}>
                        <Text>High Scores</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    )
}