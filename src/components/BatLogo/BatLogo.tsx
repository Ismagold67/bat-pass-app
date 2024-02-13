import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './StyleBatLogo';
import imageBatLogo from '../../../assets/pictures/logobat.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image 
        source={imageBatLogo}
        style={{
            resizeMode: 'contain',
            height: 180,
            width: 'auto'
        }}/>
    </>
  );
}