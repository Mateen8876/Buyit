import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {CarouselData} from '../data/CarouselData';

const {width} = Dimensions.get('window');

const CarouselComponent = () => {
  const flatListRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View style={[styles.slide, {width}]}>
        <Image source={item.image} style={styles.imgStyle} />
      </View>
    );
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setActiveSlide(currentIndex);
  };

  const goToSlide = (index) => {
    flatListRef.current?.scrollToIndex({index, animated: true});
    setActiveSlide(index);
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={CarouselData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item, index) => index.toString()}
      />
      
      {/* Custom pagination */}
      <View style={styles.paginationContainer}>
        {CarouselData.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeSlide ? 'green' : '#FFFFFF',
                opacity: index === activeSlide ? 1 : 0.4,
                transform: [
                  {scale: index === activeSlide ? 1 : 0.6}
                ],
              },
            ]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'relative',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    height: 250,
    width: '98%',
    resizeMode:'stretch',

  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 3,
  },
});

export default CarouselComponent;