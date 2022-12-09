import React from "react";
import { Button, FlatList, Text, TextInput, ImageBackground, View } from 'react-native';
import MyStylesheet from "../../Components/MyStylesheet";
import { Formik } from 'formik';
import { storeUsers } from '../../Components/UserStorage'

export default function CreerCompte({ navigation }) {
    const image = require('../../assets/Backgrounds/Splash.jpg')
    return (
        <Formik
            initialValues={{ pseudo: '' }}
            onSubmit={values => { storeUsers(values); navigation.navigate('Splash Screen', values) }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
                    <View style={MyStylesheet.mainViewContainer}>
                        <Text>Choisissez un pseudo pour votre compte :</Text>
                        <TextInput
                            style={MyStylesheet.accountInput}
                            onChangeText={handleChange('pseudo')}
                            onBlur={handleBlur('pseudo')}
                            value={values.pseudo} />
                        <Button
                            onPress={handleSubmit}
                            color={'green'}
                            style={{ borderRadius: 10 }}
                            title="Créer mon compte" />
                    </View>
                </ImageBackground>
            )}
        </Formik>
    )
}