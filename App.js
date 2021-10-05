import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const [result, setResult] = useState('0');

  const buttonPressed = (e, calc) => {
    if (calc === '+') setResult(parseInt(number1) + parseInt(number2) + '');
    else if (calc === '-')
      setResult(parseInt(number1) - parseInt(number2) + '');
    else if (calc === '/')
      setResult(parseInt(number1) / parseInt(number2) + '');
    else if (calc === '*')
      setResult(parseInt(number1) * parseInt(number2) + '');
    Keyboard.dismiss();
  };

  const clearNumber = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.calculator}>Calculator</Text>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 1:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="0"
            style={{ textAlign: 'right' }}
            onChangeText={(text) => setNumber1(text)}
            keyboardType={'numeric'}
          ></TextInput>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 2:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="0"
            style={{ textAlign: 'right' }}
            onChangeText={(text) => setNumber2(text)}
            keyboardType={'numeric'}
          ></TextInput>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => buttonPressed(e, '+')}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => buttonPressed(e, '-')}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => buttonPressed(e, '*')}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => buttonPressed(e, '/')}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>

        {/* <Button title="  +  " onPress={(e) => buttonPressed(e, '+')} />
        <Button title="  -  " onPress={(e) => buttonPressed(e, '-')} />
        <Button title="  *  " onPress={(e) => buttonPressed(e, '*')} />
        <Button title="  /  " onPress={(e) => buttonPressed(e, '/')} /> */}
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Result:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput
            placeholder="0"
            style={{ textAlign: 'right' }}
            editable={false}
            value={result}
          ></TextInput>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculator: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
  },
  text: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    padding: 5,
    width: 100,
  },
  textInput: {
    justifyContent: 'center',
    padding: 5,
    borderBottomWidth: 1.0,
    width: 100,
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-evenly',
    width: 220,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 25,
    marginLeft: '30%',
    marginRight: '30%',
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
