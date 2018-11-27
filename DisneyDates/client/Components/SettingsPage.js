import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Button } from 'react-native';
import { Slider } from 'react-native-elements'

export default class SettingsPage extends React.Component {
  state = {
    ageValue: 25,
    distanceValue: 20,
    isGender: false,
    isInterestedGender: false,
  }

  handleClick(e) {
    e.stopPropagation()
  }

  render() {

    return (
      <View style={styles.container}>
        <View style = {styles.containerTop}>
            <TouchableWithoutFeedback>
                <Text
                    style= {styles.backButton} 
                />
            </TouchableWithoutFeedback>  
            <View style= {styles.middleTitle}>
                <Image
                    style= {styles.messageIcon} 
                    source= {require('../assets/settings.png')}
                />
                <Text style={styles.text} h2>settings</Text>
            </View>  
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EditProfile')}>
                <Image
                    style= {styles.searchButton} 
                    source= {require('../assets/rightarrow.png')}
                />
            </TouchableWithoutFeedback>  
        </View>
        
        <View style={styles.containerBottom1}>
            <Text style={styles.containerBottomTitle}> I am a...</Text>
                <Button
                  title  = 'Princess'  
                  style= {styles.button} 
                  buttonStyle= {styles.buttonStyle} 
                  textStyle = {styles.textStyle} 
                  onPress={this.logIn} 
                />
                <Button
                  title  = 'Prince'  
                  style= {styles.button} 
                  buttonStyle= {styles.buttonStyle} 
                  textStyle = {styles.textStyle} 
                  onPress={this.logIn} 
                />
                <Button
                  title  = 'Other'  
                  style= {styles.button} 
                  buttonStyle= {styles.buttonStyle} 
                  textStyle = {styles.textStyle} 
                  onPress={this.logIn} 
                />
            <Text style={styles.containerBottomTitle}> I am interested in...</Text>
            <Text style={styles.containerBottomTitle}> Maximum Age</Text>
            
            <View style={styles.sliderBox1}>
              <Text style={styles.sliderText}>Between {Math.floor(this.state.ageValue)}</Text>
              <Slider
                style = {{width: 300, marginLeft: 20, marginRight: 20}}
                step = {0}
                value = { this.state.ageValue }
                onValueChange={ ageValue => this.setState(prevState => ({ ageValue }))}
                minimumValue = {18}
                thumbTintColor = '#9013FE'
                thumbStyle = {{width: 15, height: 15, margin: 0}}
                minimumTrackTintColor = '#9013FE'
                maximumTrackTintColor = 'rgba(69,90,255, .5)'
                maximumValue = {60}
                />
            </View>
            
            <Text style={styles.containerBottomTitle}> Distance</Text>
            
            <View style={styles.sliderBox2}>   
              <Text style={styles.sliderText}>Up to {Math.floor(this.state.distanceValue)} miles away</Text>
              <Slider
                style = {{width: 300, marginLeft: 20, marginRight: 20}}
                step = {0}
                value = { this.state.distanceValue }
                onValueChange={ distanceValue => this.setState(prevState => ({ distanceValue }))}
                minimumValue = {0.5}
                thumbTintColor = '#9013FE'
                thumbStyle = {{width: 15, height: 15}}
                minimumTrackTintColor = '#9013FE'
                maximumTrackTintColor = 'rgba(69,90,255, .5)'
                maximumValue = {30}
              />
            </View>

            <Text style={styles.logOutButton}>LOG OUT</Text>
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
    borderBottomWidth: 1,
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
    color: 'rgba(69,90,255, .5)',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 12,
    marginLeft: 10,
  },
  sliderText:{
    marginTop: 12,
    marginLeft: 15,
    fontSize: 17,
    color: 'rgba(69,90,255, .5)'
  },
  sliderBox1: {
    borderWidth: .5,
    borderColor: '#9013FE',
    width: 350,
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 25,
    marginRight: 12.5,
    marginLeft: 12.5,
    // shadowColor: 'blue',
    // shadowOffset: {width: 1, height: 1},
    // shadowRadius: 7,
    // shadowOpacity: 1,
    borderRadius: 10,
    paddingBottom: 5
  },
  sliderBox2: {
    borderWidth: .5,
    borderColor: '#9013FE',
    width: 350,
    marginRight: 12.5,
    marginLeft: 12.5,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    paddingBottom: 5
  },
  logOutButton: {
    textAlign: 'center',
    justifyContent: 'center',
    width: 150,
    marginRight: 112.5,
    marginLeft: 112.5,
    padding: 10,
    borderRadius: 25,
    color: '#455aff',
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#9013FE',
  },
});




