import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Counter = (props) => (
  <View>
    <Button title="Increment (+)" onPress={props.increment} />
    <Text style={styles.counter} onPress={props.reset}>
      {props.count}
    </Text>
    <Button title="Decrement (-)" onPress={props.decrement} />
  </View>
);
export default Counter;

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
