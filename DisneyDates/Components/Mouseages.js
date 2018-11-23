import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';

export default class Mouseages extends React.Component {

  render() {
  
    return (
      <View style={styles.container}>
        <View style = {styles.containerTop}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SwipePage')}>
                <Image
                    style= {styles.backButton} 
                    source= {require('../assets/leftarrow.png')}
                />
            </TouchableWithoutFeedback>  
            <View style= {styles.middleTitle}>
                <Image
                    style= {styles.messageIcon} 
                    source= {require('../assets/mouseages.png')}
                />
                <Text style={styles.text} h2>mouseages</Text>
            </View>  
            <TouchableWithoutFeedback>
                <Image
                    style= {styles.searchButton} 
                    source= {require('../assets/search.png')}
                />
            </TouchableWithoutFeedback>  
        </View>
        <View style={styles.containerBottom}>
            <Text style={styles.containerBottomTitle}> Become Part of Their World . . . </Text>
        </View>
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
    paddingTop: 40,
    height: 130,
    borderBottomColor: '#9013FE',
    borderWidth: 1,
  },
  backButton: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginTop: 20,
  },
  middleTitle: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: 'rgba(69, 90, 255, .7)',
    textShadowColor: '#8E3AFF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 7
  },
  messageIcon: {
    width: 52,
    height: 52,
    marginTop: 3,
  },  
  searchButton: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginTop: 20,
  },
  containerbottom: {
    flex: 3
  },
  containerBottomTitle: {
    color: '#9013FE',
    fontSize: 17,
    marginTop: 12,
    marginLeft: 10,

  }
});




