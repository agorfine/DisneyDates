import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class SettingsPage extends React.Component {


  render() {
  
    return (
      <View style={styles.container}>
        <View style= {styles.containerTop}>
          <Text style={styles.text} h2>SETTINGS PAGE WORKS!!!!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  containerTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  editButton: {
    width: 50,
    height: 50
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    // paddingTop: 10,
    height: 80,
    color: 'rgba(69, 90, 255, .7)',
    textShadowColor: '#8E3AFF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7
  }
});




