import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>Rosa Life and Love</Text>
      </View>
    );
  }
}

export default HomeScreen;
