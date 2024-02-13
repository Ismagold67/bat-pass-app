import React from 'react';
import { View, TextInput } from 'react-native';

import { styles2 } from './StyleBatText';

interface BatTextInputProps{
  pass: string
}

export function BatTestInput(props: BatTextInputProps) {
  return (
    <>
      <TextInput
        placeholder='pass'
        style={styles2.inputer}
        value={props.pass}
      />
    </>
  );
}