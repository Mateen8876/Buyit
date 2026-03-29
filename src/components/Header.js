import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window'); // Get screen width

const Header = () => {
  return (
    <View style={styles.main}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}
        style={styles.container}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={20} color="#1f1f1f" />
            <TextInput
              placeholder="Search Buy.it"
              placeholderTextColor="#848484"
              style={styles.textInput}
              numberOfLines={1}
              maxLength={40}
            />
          </View>
          <AntDesign name="scan1" size={20} color="#909594" />
        </View>
        <Feather name="mic" size={20} color="#000000" style={styles.micIcon} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   
  },
  inputBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a1bcc0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 8,
    color: 'black',
    flex: 1,
    fontSize: 14,
  },
  micIcon: {
    padding: 4,
  },
});

export default Header;
