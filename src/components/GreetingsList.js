import React, { Component, PropTypes } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import _ from 'lodash';

import Greeting from './Greeting';


const styles = StyleSheet.create({
  align: {
    alignItems: 'center',
  },
});

export default class GreetingsList extends Component {

  static handleFunction(param) {
    Alert.alert(`Received: ${JSON.stringify(param)}`);
  }

  render() {
    const greetings = _.map(this.props.names, name =>
      (<Greeting key={name} name={name} handleFunction={GreetingsList.handleFunction} />));

    return (
      <View style={styles.align} >
        {greetings}
      </View>
    );
  }
}

GreetingsList.defaultProps = {
  names: [],
};

GreetingsList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).required,
};
