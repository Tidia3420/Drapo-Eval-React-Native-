import React, { useState } from "react";
import { Button, ImageBackground, Text, TouchableHighlight, View } from "react-native";
import AppLoading from 'expo-app-loading';
import MyStylesheet, { useFonts } from "../../Components/MyStylesheet";

export default function WelcomeScreen({ navigation }) {
    const [IsReady, SetIsReady] = useState(false);
    const image = require('../../assets/Backgrounds/Earth.jpg')

    const LoadFonts = async () => {
        await useFonts();
    };

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
        <TouchableHighlight
            style={{flex:1}}
            onPress={() => navigation.navigate('Comptes')}>
            <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
                <>
                    <View style={[MyStylesheet.mainViewContainer, { flex: 3 }]}>
                        <Text style={MyStylesheet.mainTitle}>Drapo!</Text>
                        <Text style={MyStylesheet.gochi}>Le jeu pour mettre à l'épreuve</Text>
                        <Text style={MyStylesheet.gochi}>vos connaissances en géographie!</Text>
                    </View>
                    <View style={{ marginTop: 25, flex: 1 }}>
                        <Text>Appuyez n'importe où pour démarrer !</Text>
                    </View>
                </>
            </ImageBackground >
        </TouchableHighlight>
    )
}