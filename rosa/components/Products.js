import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {PricingCard, Card, Button, Text} from 'react-native-elements';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Products extends Component {
  renderProducts = (products) => {
    console.log(products);
    return products.map((item, index) => {
      return (
        <View key={index} style={{padding: 20}}>
          <Button
            onPress={() => this.props.onPress(item)}
            title={item.name + '-' + item.price}
          />
          <PricingCard
            color="#4f9deb"
            title={item.name}
            price={item.price}
            button={{title: 'Add to Cart', icon: 'flight-takeoff'}}
            onButtonPress={() => this.props.onPress(item)}
          />

          <Card
            image={{
              uri: `../images/apparel/springSummer20/${item.name}.JPG`,
            }}>
            <Text style={{marginBottom: 10, marginTop: 20}} h3>
              {item.name}
            </Text>
            <Text style={styles.price} h4>
              ${item.price}
            </Text>

            <Button
              type="clear"
              title="Purchase"
              onButtonPress={() => this.props.onPress(item)}
            />
          </Card>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}

export default Products;
