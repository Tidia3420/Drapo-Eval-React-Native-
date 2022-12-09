import React, { useEffect, useState } from "react";
import { View, Switch, Text, ImageBackground} from "react-native";
import MyStylesheet from "../../Components/MyStylesheet";
import { storeSettings, getSettings } from '../../Components/SettingsStorage'

export default function Settings({ route }) {
    const [easyMode, setEasyMode] = useState(false)
    const image = require('../../assets/Backgrounds/Earth3.jpg')

    useEffect(() => {
        getSettings(route.params.user).then((res) => setEasyMode(res))
    }, [])

    return (
        <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
            <View style={{backgroundColor:'rgba(0,0,0, 0.25)', marginHorizontal:30, paddingBottom:20, paddingTop:10}}>
                <View style={MyStylesheet.settings}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={easyMode ? "#000000" : "#f4f3f4"}
                        onValueChange={() => onPressHandler()}
                        value={easyMode}
                    />
                    <Text style={{ paddingTop: 14, paddingLeft: 35 }}>Activer le mode facile</Text>
                </View>
                <Text style={{ fontSize: 12, paddingHorizontal: 50 }}>Le mode facile vous indique la première lettre et le nombre de lettres de chaque pays.</Text>
            </View>
        </ImageBackground>
    );

    function onPressHandler() {
        storeSettings(!easyMode, route.params.user);
        setEasyMode(!easyMode);
    }
}