import 'react-native-gesture-handler';

import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import store from './store/index';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ApparelScreen from './screens/ApparelScreen';
import KnowUsScreen from './screens/KnowUsScreen';
import CartScreen from './screens/CartScreen';

// import Icon from 'react-native-vector-icons/Ionicons ';
// <Icon name='ios-cart'size={30}/>

const styles = StyleSheet.create({
  // will occupy the fill screen
  screen: {
    flex: 1,
  },
});

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Apparel" component={ApparelScreen} />
      <Tab.Screen name="Know Us" component={KnowUsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
