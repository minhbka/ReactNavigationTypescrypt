import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useAppSelector, RootState, actions} from '../store/root.store';
import {isDocumentVisible} from './../node_modules/@reduxjs/toolkit/src/query/utils/isDocumentVisible';
const ProfileScreen = () => {
  const [loading, setLoading] = useState(false);
  const listImage = useAppSelector((state: RootState) => state.image.listImage);
  const handleGetListImage = async () => {
    setLoading(true);
    await actions.image.getListImage();
    setLoading(false);
  };

  const handleDeleteImage = async (id: number) => {
    await actions.image.deleteImages(id);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text style={styles.sectionTitle}>Name: Phan Van Minh</Text>
      <TouchableOpacity>
        <Text style={styles.sectionTitle}>Edit Profile</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={{height: 15}} />
        <Button title="Get List Image" onPress={handleGetListImage} />
        <View style={{height: 15}} />
        {loading && (
          <ActivityIndicator size={'large'} style={{alignSelf: 'center'}} />
        )}
        {listImage.map(image => {
          return (
            <View key={image.id} style={{marginTop: 15}}>
              <Text>{image.title}</Text>
              <Image
                source={{uri: image.thumbnailUrl}}
                style={{width: 120, height: 120}}
              />
              <Button
                title="Delete Card"
                color={'red'}
                onPress={() => handleDeleteImage(image.id)}
              />
            </View>
          );
        })}
      </ScrollView>
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
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
    color: 'black',
  },
});
export default ProfileScreen;
