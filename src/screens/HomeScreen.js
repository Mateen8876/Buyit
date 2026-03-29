import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import CarouselComponent from '../components/CarouselComponent';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brands from '../components/Brands';

const HomeScreen = () => {
  return (
    <View style={styles.containers}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SubHeader />
        <Category />
        <CarouselComponent />
        <Services />
        <Deals />
        <Brands/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#f5f5f5', // light grey background
    paddingBottom: 20,
  },
});
