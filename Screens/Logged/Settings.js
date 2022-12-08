import React, { useState } from "react";
import { View, Switch, Text } from "react-native";
import MyStylesheet from "../../Components/MyStylesheet";

export default function Settings({ route }) {
    const [easyMode, setEasyMode] = useState(false)

    return (
        <View style={MyStylesheet.mainViewContainer}>
            <View style={MyStylesheet.header}>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={easyMode ? "#000000" : "#f4f3f4"}
                    onValueChange={() => { setEasyMode(!easyMode) }}
                    value={easyMode}
                />
                <Text style={{paddingTop:14, paddingLeft:35}}>Activer le mode facile</Text>
            </View>
            <Text style={{fontSize:12, paddingHorizontal:50}}>Le mode facile vous indique la première lettre et le nombre de lettres de chaque pays.</Text>
        </View>
    );
}