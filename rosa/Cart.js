import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({});

function Cart() {
  return (
    <View style={styles.screen}>
      <Text>Cart</Text>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

export default connect()(Cart);
