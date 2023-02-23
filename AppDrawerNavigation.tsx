/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantsScreen from './screens/Restaurants';
import RestaurantScreen from './screens/Restaurant';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ExploreIcon from './icons/ExploreIcon';
import RestaurantIcon from './icons/RestaurantIcon';
import ProfileIcon from './icons/ProfileIcon';

export type MenuParams = {
  ExploreStack: NavigatorScreenParams<ExploreStackParams>;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};
// const RootStack = createNativeStackNavigator<RootStackParams>();
const Menu = createDrawerNavigator<MenuParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();
const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{
        headerShown: false,
      }}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();
const ExplorecreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Menu.Navigator
        initialRouteName="ExploreStack"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#e67a15',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Menu.Screen
          name="ExploreStack"
          component={ExplorecreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            drawerLabel: 'Explore',
          }}
        />
        <Menu.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <RestaurantIcon color={color} size={size} />
            ),
            drawerLabel: 'Restaurants',
          }}
        />
        <Menu.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            drawerLabel: 'Profile',
          }}
        />
      </Menu.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginTop: 150,
  },
});

export default App;
