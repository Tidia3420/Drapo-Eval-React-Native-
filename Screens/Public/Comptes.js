import React, {useState, useEffect} from "react";
import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import MyStylesheet from "../../Components/MyStylesheet";
import { getUsers } from '../../Components/UserStorage'

export default function a() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((res) => setUsers(res));
    }, [])

    return (
        <View style={MyStylesheet.mainViewContainer}>
            <Text>Choisissez un compte :</Text>
            <FlatList data={users} renderItem={({ item }) => (
                <TouchableHighlight
                onPress={()=>{}}>
                    <Text>{item.pseudo}</Text>
                </TouchableHighlight>
            )} />
        </View>
    )
}