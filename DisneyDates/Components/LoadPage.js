import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class LoadPage extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate('LogInPage')
    }, 4000);
    return (
      <View style={styles.container}>
          <Text style={styles.text} h2>Disney Dates</Text>
          <Image style= {styles.logo} source= {require('../assets/disneyLogo512.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 75,
  },
  logo: {
    height: 230,
    width: 300,
    alignSelf: 'center',
    marginTop: 65,
  },
});

