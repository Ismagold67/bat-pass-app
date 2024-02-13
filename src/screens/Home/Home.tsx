import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import styles from './Style'
import { BatLogo } from '../../components/BatLogo/BatLogo';
import { BatButton } from '../../components/BatButton/BatButton';
import background from '../../../assets/pictures/backgroundImage.jpg'

export default function Home() {
    return(
        <ImageBackground 
        source={background}
        style={{flex: 1}}
        resizeMode='cover'
        >
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
           
            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
            <StatusBar style="light" />
        </View>
        </ImageBackground>
    )
}
