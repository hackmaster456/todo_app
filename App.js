import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Avatar
        xlarge
        rounded
        title='fight me'
        source={{ url: 'https://i.imgur.com/1tpvNmh.jpg' }}
      
      />
        <Text>HELLO</Text>
        <Text>WORLD!</Text>
        <Button 
        title='Hello' 
        onPress={() => { console.log('happy'); }} 
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
});
