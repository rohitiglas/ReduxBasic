import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {INCREMENT, DECREMENT, INCREMENT_ASYNC} from '../../store/reducer';

const Counter = ({count, onIncrement, onDecrement}: any) => (
  <View>
    <Button title="Increment (+)" onPress={onIncrement} />
    <Text style={styles.counter}>{count}</Text>
    <Button title="Decrement (-)" onPress={onDecrement} />
  </View>
);
const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
const action = (type: any) => () => ({type});
export const Counters = connect((state) => ({count: state}), {
  onIncrement: action(INCREMENT),
  onDecrement: action(DECREMENT),
  onIncrementAsync: action(INCREMENT_ASYNC),
})(Counter);
