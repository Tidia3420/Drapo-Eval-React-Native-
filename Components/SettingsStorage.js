import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeSettings = async (value, username) => {
    console.log('storeSettings called')
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('Drapo_settings_' + username, jsonValue)
    } catch (e) {
        console.log(e);
        Alert.alert(e);
    }
}


const getSettings = async (username) => {
    console.log('getSettings called')
    try {
        const jsonValue = await AsyncStorage.getItem('Drapo_settings_' + username);
        if (jsonValue == null) {
            console.log('Miss', jsonValue)
            storeSettings(false, username)
            return false;
        } else {
            console.log('Success', jsonValue)
            return value = JSON.parse(jsonValue)
        }
    } catch (e) {
        console.log(e)
    }
}

export { storeSettings, getSettings }