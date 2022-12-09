import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text, ImageBackground } from "react-native";
import MyStylesheet from "../../Components/MyStylesheet";
import { getHS } from "../../Components/HighScoreStorage";

export default function HighScores({ route }) {
    console.log(route.params.user);
    const [highScores, setHighScores] = useState([])
    const user = route.params.user;
    const image = require('../../assets/Backgrounds/Earth4.jpg')

    useEffect(() => {
        getHS().then((res) => setHighScores(res));
    }, [])


    return (
        <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
            <View style={[MyStylesheet.mainViewContainer, {backgroundColor:'rgba(0,0,0, 0.25)', paddingHorizontal:15}]}>
                <FlatList data={highScores} renderItem={({ item }) => (
                    <>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <View style={[MyStylesheet.header, MyStylesheet.listItem]}>
                            {user == item.user && <Text>YOU</Text>}
                            <Text style={{ paddingHorizontal: 30 }}>{item.user}</Text>
                            <Text style={{ paddingHorizontal: 30 }}>{item.score}</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                    </>
                )} />
            </View>
        </ImageBackground>
    )
}