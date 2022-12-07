import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUsers = async (value) => {
    console.log('storeUsers called')
    let existingValues = await getUsers();
    if(existingValues) {
        existingValues.push(value)
        try {
            const jsonValue = JSON.stringify(existingValues)
            await AsyncStorage.setItem('Drapo_users', jsonValue)
        } catch (e) {
            console.log(e);
            Alert.alert(e);
        }
    } else {
        try {
            const jsonValue = JSON.stringify([value])
            await AsyncStorage.setItem('Drapo_users', jsonValue)
        } catch (e) {
            console.log(e);
            Alert.alert(e);
        }
    }

}

const getUsers = async () => {
    console.log('getUsers called')
    try {
        const jsonValue = await AsyncStorage.getItem('Drapo_users');
        if (jsonValue == null) {
            console.log('Miss', jsonValue)
        } else {
            console.log('Success', jsonValue)
            return value = JSON.parse(jsonValue)
        }
    } catch (e) {
        console.log(e)
    }
}

export { storeUsers, getUsers }