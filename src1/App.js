import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {Counters} from './components/counter/counter';

function App() {
  return (
    <>
      <Provider store={store}>
        <React.StrictMode>
          <View style={styles.container}>
            <Counters />
          </View>
        </React.StrictMode>
      </Provider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
