import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import MyStylesheet from "../../Components/MyStylesheet";
import { getUsers } from '../../Components/UserStorage'

export default function Comptes({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((res) => setUsers(res));
    }, [])

    return (
        <View style={MyStylesheet.mainViewContainer}>
            <Text>Choisissez un compte :</Text>
            <View style={{ height: 450, paddingVertical:25}}>
                <FlatList data={users} renderItem={({ item }) => (
                    <>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <TouchableHighlight
                            style={MyStylesheet.listItem}
                            onPress={() => { navigation.navigate('Splash Screen',  {pseudo:item.pseudo})}}>
                            <Text>{item.pseudo}</Text>
                        </TouchableHighlight>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                    </>
                )} />
            </View>
            <Button
                onPress={() => { navigation.navigate('Créer un compte') }}
                title="Ou appuyez ici pour en créer un!" />
        </View>
    )
}