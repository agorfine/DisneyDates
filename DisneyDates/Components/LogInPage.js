import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button } from 'react-native';

export default class LogInPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.text} h2>Disney Dates</Text>
          <Image style= {styles.logo} source= {require('../assets/disneyLogo512.png')}/>
          <Button style= {styles.button} title= 'CONTINUE WITH FACEBOOK' onPress= {()=>{this.props.navigation.navigate('Load')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    marginTop: 200,
  },
  logo: {
    height: 230,
    width: 300,
    alignSelf: 'center',
    marginTop: 40,
  },
  button: {
	marginVertical: 100,
  }
});