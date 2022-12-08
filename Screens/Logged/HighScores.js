import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import MyStylesheet from "../../Components/MyStylesheet";
import {getHS} from "../../Components/HighScoreStorage";

export default function HighScores({ route }) {
    console.log(route.params.user);
    const [highScores, setHighScores] = useState([])
    const user = route.params.user;

    useEffect(() => {
        getHS().then((res)=> setHighScores(res));
    }, [])


    return (
        <View style={MyStylesheet.mainViewContainer}>
            <FlatList data={highScores} renderItem={({ item }) => (
                <>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                    <View style={[MyStylesheet.header, MyStylesheet.listItem]}>
                    { user == item.user && <Text>YOU</Text> }
                        <Text style={{paddingHorizontal:30}}>{item.user}</Text>
                        <Text style={{paddingHorizontal:30}}>{item.score}</Text>
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
    )
}