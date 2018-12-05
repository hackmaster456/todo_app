import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={'Hey there friend'} /> 
      <Avatar
        xlarge
        rounded
        title='NS1'
      
      />
        <Text style={styles.bigblue}>HELLO</Text>
        <Text>WORLD!</Text>
        <Button 
        title='Hello' 
        onPress={() => { console.log('dont diu'); }} 
        color='red'

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
