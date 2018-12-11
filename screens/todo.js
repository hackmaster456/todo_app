import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native';

class TodoScreen extends React.Component {
  renderRow = ({ item }) => (
    <View style={styles.row}>
      <Text>{item.text}</Text>
    </View>
  );
  renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <Text style={styles.headerfont}>{section.title}</Text>
    </View>
  );

  render() {
    return (
      <SectionList
        sections={sections}
        renderItem={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

const sections = [
  {
    id: 0,
    title: 'Section 1',
    data: [{ id: 0, text: 'Doge 1' }, { id: 1, text: 'Doge 2' }]
  },

  {
    id: 1,
    title: 'Section 2',
    data: [{ id: 3, text: 'Doge 3' }, { id: 4, text: 'Doge 4' }]
  },

  {
    id: 2,
    title: 'Section 3',
    data: [{ id: 5, text: 'Doge 5' }, { id: 6, text: 'Doge 6' }]
  }
];

const styles = StyleSheet.create({
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'powderblue'
  },
  header: {
    color: 'black',
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerfont: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default TodoScreen;
