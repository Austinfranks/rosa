import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {WebView} from 'react-native-webview';

import Products from '../components/Products';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paybutton: {
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class CartScreen extends Component {
  state = {
    showModal: false,
    status: 'Pending',
  };

  handleResponse = (data) => {
    if (data.title === 'success') {
      this.setState({showModal: false, status: 'Complete'});
    } else if (data.title === 'cancel') {
      this.setState({showModal: false, status: 'Cancelled'});
    } else {
      return;
    }
  };

  render() {
    return (
      <View style={styles.screen}>
        {this.props.cartItems.length > 0 ? (
          <Products
            onPress={this.props.removeItem}
            products={this.props.cartItems}
          />
        ) : (
          <Text>There are no items in your cart</Text>
        )}

        <Modal
          visible={this.state.showModal}
          onRequestClose={() => this.setState({showModal: false})}>
          <WebView
            source={{uri: 'http://192.168.1.5:3000'}}
            onNavigationStateChange={(data) => this.handleResponse(data)}
            injectedJavaScript={`document.f1.submit()`}
          />
        </Modal>
        <TouchableOpacity
          style={styles.paybutton}
          onPress={() => this.setState({showModal: true})}>
          <Text>Pay with Paypal</Text>
        </TouchableOpacity>
        <Text>Payment Status: {this.state.status}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) =>
      dispatch({type: 'REMOVE_FROM_CART', payload: product}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
