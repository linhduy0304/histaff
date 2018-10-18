
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount = () => {
    Actions.login()
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default App;
