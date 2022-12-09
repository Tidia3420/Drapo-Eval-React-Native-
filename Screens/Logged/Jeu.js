import React, { useEffect, useState } from "react";
import { Text, View, Image, ImageBackground, TextInput, Alert, BackHandler } from "react-native";
import API from '../../Components/API'
import MyStylesheet from "../../Components/MyStylesheet";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { storeHS } from "../../Components/HighScoreStorage";
import { getSettings } from '../../Components/SettingsStorage'

export default function Jeu({ route, navigation }) {
    const [drapeaux, setDrapeaux] = useState([{ name: { common: 'Loading..' } }])
    const [pickedFlags, setPickedFlags] = useState([]);
    const [currentFlag, setCurrentFlag] = useState(-1);
    const [countdown, setCountdown] = useState(true)
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [easyMode, setEasyMode] = useState(false)
    const image = require('../../assets/Backgrounds/ingameBg.jpg')


    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => { return (true) })
        if (route.params.drapeaux === undefined) {
            API.get().then((res) => {
                setDrapeaux(res.data);
                let myFlags = [];
                while (myFlags.length < 10) {
                    var r = Math.floor(Math.random() * res.data.length) + 1;
                    if (!myFlags.includes(r)) { myFlags.push(r) }
                }
                setPickedFlags(myFlags);
                setCurrentFlag(0);
            });
        } else {
            if (route.params.currentFlag == 9) {
                storeHS({ user: route.params.user, score: route.params.score })
                Alert.alert('Vous avez fait un score de : ' + route.params.score);
                setTimeout(() => {
                    navigation.reset({
                        index: 1,
                        routes: [{ name: 'Menu principal', params: { user: route.params.pseudo } }, { name: 'High Scores', params: { user: route.params.user } }]
                    });
                }, 3000)
            } else {
                setDrapeaux(route.params.drapeaux);
                setPickedFlags(route.params.pickedFlags);
                setScore(route.params.score);
                setCurrentFlag(route.params.currentFlag + 1);
            }
        }
        getSettings(route.params.user).then((res) => (setEasyMode(res)));
    }, [])


    if (currentFlag == -1) {
        return (
            <View style={MyStylesheet.mainViewContainer}>
                <Text>Loading..</Text>
            </View>
        )
    } else {
        return (
            <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
                <View style={MyStylesheet.mainViewContainer}>
                    <View style={[MyStylesheet.gameView, MyStylesheet.header]}>
                        <Text style={[MyStylesheet.gochi, { fontSize: 70, paddingHorizontal: 25 }]}>Drapo!</Text>
                        <CountdownCircleTimer
                            size={100}
                            isPlaying={countdown}
                            duration={4}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[15, 10, 5, 0]}
                            onComplete={() => { setShowAnswer(true); setTimeout(() => { nextFlag() }, 3000) }}>
                            {({ remainingTime }) => <Text>{remainingTime}</Text>}
                        </CountdownCircleTimer>
                    </View>
                    <View style={MyStylesheet.gameView}>
                        <Image style={MyStylesheet.flag} source={{ uri: drapeaux[pickedFlags[currentFlag]].flags.png }} />
                        <Text style={[MyStylesheet.gochi, { fontSize: 24 }]}>{currentFlag + 1}/10</Text>
                    </View>
                    {easyMode &&
                        <View style={MyStylesheet.hintContainer}>
                            <Text style={[MyStylesheet.gochi, MyStylesheet.hint]}>{drapeaux[pickedFlags[currentFlag]].translations.fra.common.charAt(0)}...</Text>
                            <Text style={[MyStylesheet.gochi, MyStylesheet.hint]}>{drapeaux[pickedFlags[currentFlag]].translations.fra.common.length}</Text>
                        </View>
                    }
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        {!showAnswer ?
                            <TextInput
                                style={MyStylesheet.gameInput}
                                autoFocus={true}
                                onChangeText={value => onChangeHandler(value)}
                            ></TextInput>
                            :
                            <Text style={[MyStylesheet.gochi, { fontSize: 32 }]}>{drapeaux[pickedFlags[currentFlag]].translations.fra.common}</Text>
                        }
                    </View>
                </View>
            </ImageBackground>
        )
    }

    function onChangeHandler(value) {
        let accpetableValues = [
            drapeaux[pickedFlags[currentFlag]].translations.fra.common.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
            drapeaux[pickedFlags[currentFlag]].translations.fra.official.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        ]
        let answer = value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (accpetableValues.includes(answer)) {
            setCountdown(false)
            nextFlag(true);
        }
    }

    function nextFlag(correct = false) {
        navigation.push('Jeu', { user: route.params.user, drapeaux: drapeaux, pickedFlags: pickedFlags, currentFlag: currentFlag, score: correct ? score + 1 : score });
    }
}