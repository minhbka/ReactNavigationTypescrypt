import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';
import {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ExploreStackParams,
  RestaurantsStackParams,
  BottomTabParams,
} from '../App';

type Props = CompositeScreenProps<
  NativeStackScreenProps<ExploreStackParams, 'Explore'>,
  BottomTabScreenProps<BottomTabParams>
>;

const ExploreScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Chicken restaurant"
          onPress={() => {
            // navigation.push('Restaurant', {name: 'Chicken restaurant'});
            navigation.navigate('RestaurantsStack', {
              screen: 'Restaurant',
              params: {name: 'Hello from explore'},
            });
          }}
        />
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />

        <Text style={styles.sectionTitle}>Most popular restaurant</Text>
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.push('Restaurant', {name});
          }}
        />
      </View>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;
