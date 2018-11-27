import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import SwipeCard from './SwipeCard'
import EditProfile from './EditProfile'
import Mouseages from './Mouseages'

export default class SwipePage extends React.Component {
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
      fetch('http://173.2.3.208:3001/disneyDates/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }


  render() {
    
    return (

      <View style={styles.container}>
        <View style= {styles.containerTop}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Image
                style= {styles.editButton} 
                source= {require('../assets/editMouse.png')}
            />
          </TouchableWithoutFeedback>  
          {this.state.fontLoaded ? (<Text style={styles.text} h2>Disney Dates</Text>): null }
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Mouseages')}>  
            <Image
                style= {styles.mouseagesButton} 
                source= {require('../assets/mouseages.png')} 
            />
          </TouchableWithoutFeedback>
        </View>
        <SwipeCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    height: 100
  },
  editButton: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginTop: 3,
  },
  mouseagesButton: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginTop: 3,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'disneyFont',
    fontSize: 37,
    marginTop: 3,
    paddingTop: 5,
    // height: 80,
    width: 200,
    color: 'rgba(69, 90, 255, .7)',
    textShadowColor: '#8E3AFF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7
  }
});




