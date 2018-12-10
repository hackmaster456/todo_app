import React from 'react';
import { Stylesheet, Text, View, Button, Alert } from 'react-native';


//This is a stateless functional component
/*export const Header= (props) => {
    return (
        <Text>{ props.textIWant }</Text>
    );
};*/

/*export const Dog= (props) => {
    return (
        <Text>{ props.textile }</Text>
    );
};*/

//This is a stateful functional component
export default class Header extends React.Component {

    constructor(props) { //set state up
        super(props); // run state

        // how we create properties
        this.textIwant = props.textIwant;
        //how we create state
        this.state = {
            number: 0
        };

        this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
    }


    componentDidUpdate() { //any state changed, run the function inside this
        console.log(this.state.number);
    }

    addNumberWhenPressed() { //how we manipulate state
        const previousNumber = this.state.number; //variable that store current state
        this.setState({ //function to change the state
            number: previousNumber + 1
        });
    }

    render() {
        return (
            <View    style={{
                alignSelf: 'center'
               }}>
            <Button title={this.textIwant} 
            onPress={this.addNumberWhenPressed}
            
         
            ></Button>
            </View>
        );
    
    }

}
