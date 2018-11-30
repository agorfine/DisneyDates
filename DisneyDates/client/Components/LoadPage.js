import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, AsyncStorage } from 'react-native';

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
    await this._retrieveData()
  }

  _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('fb_id');
        if (value !== null) {
          // We have data!!
          console.log(value);
          setTimeout(() => {
            this.props.navigation.navigate('SwipePage')
            }, 2000);
        } else {
          console.log('storage empty')
          setTimeout(() => {
            this.props.navigation.navigate('LogInPage')
            }, 2000);
        }
       } catch (error) {
         // Error retrieving data
         console.log(error)
       }
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
    fontSize: 72,
    height: 100,
    width: 360,
    paddingTop: 20,
    color: 'rgba(69, 90, 255, .7)',
    textShadowColor: '#8E3AFF',
    textShadowOffset: {width: 1, height: 1 },
    textShadowRadius: 7
  },
  logo: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 0,
  },
});

