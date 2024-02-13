import React, {useState} from 'react';
import {Text, Pressable, TextInput } from 'react-native';

import { styles } from './BatButtonStyles';
import { styles2 } from '../BatTestInput/StyleBatText'
import { BatTestInput } from '../BatTestInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function BatButton() {
    const [pass, setPass] = useState('')
    const [passLen, setPassLen] = useState('')
    function handleGenerateButton() {
        let generateToken = generatePass(parseInt(passLen))
        setPass(generateToken)
        console.log(passLen)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }
    const handleInputChange = (text: string) => {
        setPassLen(text)
    }
  return (
    <>
        <TextInput
        placeholder='Senha de quantos caracteres??'
          value={passLen}
          onChangeText={handleInputChange}
          style={styles2.inputer}
        />
        <BatTestInput pass={pass}/>
        <Pressable
          onPress={handleGenerateButton}
          style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable
          onPress={handleCopyButton}
          style={styles.button}
        >
            <Text style={styles.text}>⚡COPY⚡</Text>
        </Pressable>
    </>
  );
}