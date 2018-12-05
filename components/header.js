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
class Header extends React.Component {

    constructor(props) { //set state up
        super(props); // run state

        // how we create properties
        this.textIwant = props.textIwant;
    }
    render() {
        return (
            <Text>{this.textIwant}</Text>
        );
    
    }

}
export default Header