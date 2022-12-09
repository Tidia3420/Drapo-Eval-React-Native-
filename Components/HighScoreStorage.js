import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeHS = async (value) => {
    console.log('storeHS called')
    let existingValues = await getHS();
    if (existingValues) {
        existingValues.push(value);
        let highScores = existingValues.sort((a, b) => {
            return b.score - a.score;
        });

        if (highScores.length > 10) {
            highScores = highScores.slice(0,9);
        }

        try {
            const jsonValue = JSON.stringify(highScores)
            await AsyncStorage.setItem('Drapo_HS', jsonValue)
        } catch (e) {
            console.log(e);
            Alert.alert(e);
        }
    } else {
        try {
            const jsonValue = JSON.stringify([value])
            await AsyncStorage.setItem('Drapo_HS', jsonValue)
        } catch (e) {
            console.log(e);
            Alert.alert(e);
        }
    }

}

const getHS = async () => {
    console.log('getHS called')
    try {
        const jsonValue = await AsyncStorage.getItem('Drapo_HS');
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

export { storeHS, getHS }