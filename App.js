import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import Header from './components/header';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todo from './screens/todo';
import Flexbox from './screens/Flexbox';
import FinalProject from './screens/FinalProject';

class App extends React.Component {
  static navigationOptions = {
    title: 'Main'
  };

  render() {
    return (
      <View style={styles.bgc}>
        <View style={styles.outer}>
          <View style={{ padding: 15 }} />
          <Header textIwant={'much wowz'} />
          <View style={{ padding: 20 }} />
        </View>

        <View style={styles.container}>
          <Avatar
            xlarge
            rounded
            source={{
              uri:
                'https://i.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg'
            }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <View style={{ padding: 15 }} />
          <Text style={styles.smallblack}>HELLO</Text>
          <Text style={styles.smallblack}>WORLD!</Text>
          <View style={{ padding: 10 }} />
          <Button
            title='Such Style'
            onPress={() => {
              console.log('dont diu');
            }}
          />

          <View style={{ padding: 10 }} />
          <Button
            title='Such TodoScreen'
            onPress={() => this.props.navigation.navigate('TodoScreen')}
          />

          <View style={{ padding: 10 }} />
          <Button
            title='Many FlexboxScreen'
            onPress={() => this.props.navigation.navigate('FlexboxScreen')}
          />

          <View style={{ padding: 10 }} />
          <Button
            title='Final Project'
            onPress={() => this.props.navigation.navigate('FinalProjectScreen')}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    TodoScreen: Todo,
    FlexboxScreen: Flexbox,
    FinalProjectScreen: FinalProject
  },
  {
    headerLayoutPreset: 'center'
  }
);

const styles = StyleSheet.create({
  bgc: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  outer: {
    //   flex: 0.5,
  },
  container: {
    //    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallblack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center'
  },
  red: {
    color: 'red'
  }
});

export default createAppContainer(AppNavigator);
