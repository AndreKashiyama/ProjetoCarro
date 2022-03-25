import React from 'react';
import {Text} from 'react-native';



export default props => {
    return <Text>{props.route.params.id}</Text>
}