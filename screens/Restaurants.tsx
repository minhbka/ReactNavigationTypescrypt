import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RestaurantsStackParams, BottomTabParams} from '../App';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type Props = CompositeScreenProps<
  NativeStackScreenProps<RestaurantsStackParams, 'Restaurants'>,
  BottomTabScreenProps<BottomTabParams>
>;

const RestaurantsScreen: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants Screen</Text>
      <ScrollView>
        <RestaurantCard
          name="Chicken restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Sushi restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
      </ScrollView>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RestaurantsScreen;
