import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabParams} from '../App';

const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BottomTabParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExploreStack', {screen: 'Explore'});
        }}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RestaurantsStack', {screen: 'Restaurants'});
        }}>
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 8,
    color: 'blue',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
});

export default Menu;
