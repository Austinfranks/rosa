import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class KnowUsScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View>
          <Text>Life and Love</Text>
          <Text>made tangible</Text>
          <Text>made simple</Text>
          <Text>made for you</Text>
        </View>

        <View>
          <Text style={styles.title}> Contact us.</Text>
          <Text> rosalifelove@gmail.com</Text>
          <Text> (704)778-7748</Text>
          <Text> Charlotte, NC</Text>
        </View>
      </View>
    );
  }
}

export default KnowUsScreen;
