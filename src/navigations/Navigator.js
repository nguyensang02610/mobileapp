import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ShoppingCart from '../screens/ShoppingCart';
import Search from '../screens/Search';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} /> 
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
