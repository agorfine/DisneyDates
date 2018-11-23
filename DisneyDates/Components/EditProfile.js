import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class EditProfile extends React.Component {
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
  
    return (
      <View style={styles.container}>
        <View style= {styles.containerTop}>
          <Image style= {styles.editButton} source= {require('../assets/editMouse.png')}/>
          {this.state.fontLoaded ? (<Text style={styles.text} h2>Disney Dates</Text>): null }
          <Image style= {styles.editButton} source= {require('../assets/mouseages.png')}/>
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
    fontFamily: 'disneyFont',
    fontSize: 40,
    // paddingTop: 10,
    height: 80,
    color: 'rgba(69, 90, 255, .7)',
    textShadowColor: '#8E3AFF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7
  }
});




