import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default class LoadPage extends React.Component {
  state= {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'disneyFont': require('../assets/disneyFont.otf')
    })
    this.setState({
      fontLoaded: true
    })
  }

  render() {
    setTimeout(() => {
      this.props.navigation.navigate('LogInPage')
    }, 2000);
    return (
      <View style={styles.container}>
          {this.state.fontLoaded ? (<Text style={styles.text} h2>Disney Dates</Text>): null }
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
    marginTop: 50,
    fontFamily: 'disneyFont',
    fontSize: 75,
    height: 100,
    width: 350,
    paddingTop: 10,
    color: '#455AFF'
  },
  logo: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 0,
  },
});

