import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Products from '../components/Products';
import {apparelSS20} from '../ProductData';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ApparelScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <Products products={apparelSS20} onPress={this.props.addItemToCart} />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};

export default connect(null, mapDispatchToProps)(ApparelScreen);
