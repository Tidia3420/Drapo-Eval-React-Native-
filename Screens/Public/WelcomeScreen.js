import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import AppLoading from 'expo-app-loading';
import MyStylesheet, { useFonts } from "../../Components/MyStylesheet";

export default function WelcomeScreen({navigation}) {
    const [IsReady, SetIsReady] = useState(false);

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
        <View style={MyStylesheet.mainViewContainer}>
            <View style={[MyStylesheet.mainViewContainer, {flex:3}]}>
                <Text style={MyStylesheet.mainTitle}>Drapo!</Text>
                <Text style={MyStylesheet.gochi}>Le jeu pour mettre à l'épreuve</Text>
                <Text style={MyStylesheet.gochi}>vos connaissances en géographie!</Text>
            </View>
            <View style={{ marginTop: 25, flex:1 }}>
                <Button
                    title="Appuyez ici pour démarrer!"
                    onPress={() => {navigation.navigate('Comptes')}} />
            </View>

        </View>
    )
}