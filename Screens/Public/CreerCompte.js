import React from "react";
import { Button, Text, TextInput, ImageBackground, View } from 'react-native';
import MyStylesheet from "../../Components/MyStylesheet";
import { Formik } from 'formik';
import { storeUsers } from '../../Components/UserStorage'
import * as yup from 'yup';

export default function CreerCompte({ navigation }) {
    const image = require('../../assets/Backgrounds/Splash.jpg')
    const newUserValidationSchema = yup.object().shape({
        pseudo: yup.string().min(2, ({ min }) => `Le nom d'utilisateur doit comporter au moins ${min} caractères.`).required("Le nom d'utilisateur est requis.")
    })

    return (
        <Formik
            validationSchema={newUserValidationSchema}
            initialValues={{ pseudo: '' }}
            onSubmit={values => { storeUsers(values); navigation.navigate('Splash Screen', values) }}
        >
            {({ handleChange, handleBlur, handleSubmit, errors, isValid, values }) => (
                <ImageBackground source={image} resizeMode="cover" style={MyStylesheet.mainViewContainer}>
                    <View style={MyStylesheet.mainViewContainer}>
                        <Text>Choisissez un pseudo pour votre compte :</Text>
                        {errors.pseudo &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.pseudo}</Text>
                        }
                        <TextInput
                            style={MyStylesheet.accountInput}
                            onChangeText={handleChange('pseudo')}
                            onBlur={handleBlur('pseudo')}
                            value={values.pseudo} />
                        <Button
                            onPress={handleSubmit}
                            color={'green'}
                            disable={!isValid}
                            style={{ borderRadius: 10 }}
                            title="Créer mon compte" />
                    </View>
                </ImageBackground>
            )}
        </Formik>
    )
}