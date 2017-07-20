import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Sentry,
  SentrySeverity,
} from 'react-native-sentry';
import Config from 'react-native-config';

import Info from '../components/Info';

import { GREETINGS_SCENE_NAME } from '../screens/GreetingsScreen';
import { JSX_SCENE_NAME } from '../screens/JsxScreen';
import { STATE_SCENE_NAME } from '../screens/StateScreen';

const URL = Config.API_URL;

/** SENTRY **/
Sentry.config('https://a5699b0724684e00ac8d0d4c5fb8a94c:bb2d90bb5efe44d48d5eaa80d65e89f3@sentry.io/192722').install();

// set the tag context
Sentry.setTagsContext({
  environment: 'production',
  react: true,
});

// set the user context
Sentry.setUserContext({
  email: 'john@apple.com',
  userID: '12341',
  username: 'username',
  extra: {
    is_admin: false,
  },
});

export const HOME_SCENE_NAME = 'HOME_SCENE';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
});

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.navigateToGreetings = this.navigateToGreetings.bind(this);
    this.navigateToJsx = this.navigateToJsx.bind(this);
    this.navigateToState = this.navigateToState.bind(this);
  }

  navigateToGreetings() {
    Sentry.captureMessage('NavigateToGreetings', {
      level: SentrySeverity.Info,
    });
    this.navigate(GREETINGS_SCENE_NAME);
  }

  navigateToJsx() {
    Sentry.captureMessage('NavigateToJsx', {
      level: SentrySeverity.Info,
    });
    this.navigate(JSX_SCENE_NAME);
  }

  navigateToState() {
    Sentry.captureMessage('NavigateToState', {
      level: SentrySeverity.Info,
    });
    this.navigate(STATE_SCENE_NAME);
  }

  render() {
    return (
      <ScrollView>
        <Info />
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToGreetings}
            title="Greetings"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={this.navigateToJsx}
            title="Jsx"
          />
        </View>
        <View style={styles.margin}>
          <Button
            onPress={this.navigateToState}
            title="State"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={() => {
              Sentry.nativeCrash();
            }}
            title="Native Crash"
          />
        </View>

        <View style={styles.margin}>
          <Button
            onPress={() => {
              // set a custom message
              Sentry.captureMessage('TEST message', {
                level: SentrySeverity.Warning,
              });
            }}
            title="Error Crash"
          />
        </View>

        <Text>{URL}</Text>
      </ScrollView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.any,
  }).isRequired,
};
