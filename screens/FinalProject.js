import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity
  Alert
} from 'react-native';
import { Icon, Button } from 'react-native-elements';

class FinalProjectScreen extends React.Component {
  static navigationOptions = {
    title: 'Final Project'
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: ['linux', 'macu', 'set', 'destroy']
    };
  }

  remove = index => {
    this.setState(prevState => {
      const data = prevState.data.slice();
      data.splice(index, 1);
      return { data };
    });
  };

  

  renderRow = ({ item, index }) => (
    <View style={styles.row} key={index}>
      <Text>{item}</Text>
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          borderColor: 'black'
        }}
        //onPress={() => console.log(index)}
        onPress={() => this.remove(index)}
      >
        <Icon type='font-awesome' name='minus' size={20} color='black' />
      </TouchableOpacity>
    </View>
  );



  showForm = () => {
  if (Platform.OS == 'andriod') {
    prompt(
      'Enter Text',
    )
  }
  }

  add = (text) => {this.setState( prevState => { const {data} = prevState; return{data: data.concat(text), text: ''};});}


  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderRow}
            keyExtractor={item => item.toString()}
          />
        </View>

        <View>
          <Button title='+' />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'powderblue',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default FinalProjectScreen;
