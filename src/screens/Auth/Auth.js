import React from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends React.Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="LOGIN" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
