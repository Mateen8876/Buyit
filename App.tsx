import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content'/>
      <Router/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})