import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Categories } from '../data/Categories';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      {Categories.map(item => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen')}
          key={item.id}
          style={styles.category}
        >
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFFFF',
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: '#2c4341',
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});

export default Category;
