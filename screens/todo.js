import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';


class TodoScreen extends React.Component {
render() {
    return(
        <ScrollView>
             <View style= { styles.container1 } />
             <View style= { styles.container2 } />
             <View style= { styles.container3 } />        
        </ScrollView>
     
      
    ); 
    
}

}

const styles = StyleSheet.create({
container1: {
padding: 100,
backgroundColor: 'red'
},
container2: {
    padding: 150,
    backgroundColor: 'yellow'
    },
container3: {
        padding: 200,
        backgroundColor: 'green'
        },

    });


export default TodoScreen;