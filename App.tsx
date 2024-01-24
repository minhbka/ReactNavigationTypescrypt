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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreIcon from './icons/ExploreIcon';
import RestaurantIcon from './icons/RestaurantIcon';
import ProfileIcon from './icons/ProfileIcon';
import {Provider} from 'react-redux';
import {store} from './store/root.store';

export type BottomTabParams = {
  ExploreStack: NavigatorScreenParams<ExploreStackParams>;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};
// const RootStack = createNativeStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator<BottomTabParams>();

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
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="ExploreStack"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e67a15',
            tabBarInactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="ExploreStack"
            component={ExplorecreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <ExploreIcon color={color} size={size} />
              ),
              tabBarLabel: 'Explore',
            }}
          />
          <Tab.Screen
            name="RestaurantsStack"
            component={RestaurantScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
              tabBarLabel: 'Restaurants',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <ProfileIcon color={color} size={size} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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
