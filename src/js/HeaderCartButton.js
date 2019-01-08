import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ShoppingCart } from './shopping-cart.js';

export default class CartButton extends Component {
  constructor(props) {
    super(props);
    ShoppingCart.registerCartListener(this);

    // Need to pass this in explicitly since it's a subcomponent
    this.navigation = props.navigation;

    this.navigateToShoppingCart = this.navigateToShoppingCart.bind(this);
  }

  navigateToShoppingCart() {
    this.navigation.navigate('CartContents');
  }

  render() {

    var cartBadge = '';
    var cartContents = ShoppingCart.getCartContents();

    if (cartContents.length > 0) {
      cartBadge = <View style={ styles.badge }><Text style={ styles.shopping_cart_badge }>{ cartContents.length }</Text></View>;
    }

    return (
      <Icon.Button name="shopping-cart" size={ 30 } color="#FFF" style={ styles.cart_icon } onPress={ this.navigateToShoppingCart }>
        { cartBadge }
      </Icon.Button>
    );
  }
}

const styles = StyleSheet.create({
  cart_icon: {
    height: 70,
    backgroundColor: '#2089DC',
  },
  shopping_cart_badge: {
    color: '#FFF',
    paddingLeft: 4,
    fontSize: 18,
  },
  badge: {
    color: '#F00',
    position: 'absolute',
    zIndex: 10,
    top: 0,
    right: 4,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
  },
});
