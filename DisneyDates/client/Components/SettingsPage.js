import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Button, AsyncStorage } from 'react-native';
import { Slider } from 'react-native-elements'
import * as firebase from 'firebase';
import axios from 'axios';

export default class SettingsPage extends React.Component {
  state = {
    ageValue: 25,
    distanceValue: 20,
    isPrince: false,
    isPrincess: false,
    isMagical: false,
    isInterestedPrince: false,
    isInterestedPrincess: false,
    isInterestedMagical: false,
    gender: '',
    interested_gender: '',
    fb_id: ''

  }

  async componentDidMount() {
      const userID = await this._retrieveData()
      console.log('User ID: ', userID)
      
      let getInfo = async () => {
        let url=`http://192.168.0.4:3001/disneyDates/gender/${userID}`
        console.log(url)
        
        try {
         let data = await axios.get(url)
                    .then( res => {
                      console.log(res.data)
                      this.setState(prevState => ({
                        fb_id: res.data.data.fb_id,
                        gender: res.data.data.gender,
                        interested_gender: res.data.data.interested_gender,
                      }))
                      console.log('THIS IS STATE: ', this.state)
                    })
                    .catch(err => {
                      console.log(err)});
        } catch (error) {
              console.log('ERROR')
        }
      }

      let info = await getInfo()

      gender = async () => {
        try {
          if (this.state.gender === 'female'){
            this.setState(prevState => ({
              isPrincess: true,
            }))
          } else if (this.state.gender === 'male'){
            this.setState(prevState => ({
              isPrince: true,
            }))
          } else {
            this.setState(prevState => ({
              isMagical: true,
            }))
          }
        } catch (error) {

        }
      }

      interestedGender = async () => {
        try {
          if (this.state.interested_gender === 'female'){
            this.setState(prevState => ({
              isInterestedPrincess: true,
            }))
          } else if (this.state.interested_gender === 'male'){
            this.setState(prevState => ({
              isInterestedPrince: true,
            }))
          } else {
            this.setState(prevState => ({
              isInterestedMagical: true,
            }))
          }
        } catch (error) {

        }
      }

      let genderSet = await gender()
      let interestedGenderSet = await interestedGender()
  };

  pushData = async () => {
    const userID = await this._retrieveData()
      console.log('THANKS KOZAK pt2', userID)
      this.setState(prevState => 
        ({ fb_id: userID 
        }))
      
    try {
      let data = await axios.put(`http://192.168.0.4:3001/disneyDates/usersGender/${userID}`, {
                            fb_id: this.state.fb_id,
                            gender: this.state.gender,
                            interested_gender: this.state.interested_gender
                          })
                           .then(res => {
                            console.log(res.data);
                          })
                          .catch(err => console.log(err)
                        )
     } catch (error) {
        console.log('ERROR with push')
     }
     {this.props.navigation.navigate('EditProfile')}
  }

  _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('fb_id');
        if (value !== null) {
          // We have data!!
          console.log(value);
          return value
        }
       } catch (error) {
         // Error retrieving data
         console.log(error)
       }
  }

  _removeData = async () => {
      try {
        const value = await AsyncStorage.removeItem('fb_id');
        if (value !== null) {
          // We have data!!
          console.log('THIS IS WHAT IS IN AsyncStorage ', value);
        }
       } catch (error) {
         // Error retrieving data
         console.log(error)
      }
  }

  backToLogIn = async () => {
    try {
      {this._removeData}
      {this.props.navigation.navigate('LogInPage')}
    } catch(error) {

    }
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
            <TouchableWithoutFeedback onPress={this.pushData}>
                <Image
                    style= {styles.searchButton} 
                    source= {require('../assets/rightarrow.png')}
                />
            </TouchableWithoutFeedback>  
        </View>
        
        <View style={styles.containerBottom1}>
            <Text style={styles.containerBottomTitle}> I am a...</Text>
                <View style={styles.genderButtonContainer}>
                    <TouchableWithoutFeedback 
                      onPress={() => this.setState(prevState => ({
                        isPrince: !this.state.isPrince,
                        isPrincess: false,
                        isMagical: false, 
                        gender: 'male'
                      }))}
                    >
                      <Text style={{
                          textAlign: 'center',
                          borderWidth: 1,
                          width: 100,
                          height: 32,
                          borderColor: '#9013FE',
                          borderRadius: 15,
                          color: this.state.isPrince ? 'white' : 'rgba(69,90,255, .7)',
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingRight: 10,
                          paddingLeft: 10,
                          fontSize: 17,
                          marginLeft: 20,
                          overflow: 'hidden',
                          backgroundColor: this.state.isPrince ? '#9013FE' : 'white',
                        }}>Prince</Text>
                    </TouchableWithoutFeedback> 
                    <TouchableWithoutFeedback
                      onPress={() => this.setState(prevState => ({
                        isPrince: false,
                        isPrincess: !this.state.isPrincess,
                        isMagical: false,
                        gender: 'female' 
                      }))}
                    >
                      <Text style={{
                        textAlign: 'center',
                        borderWidth:1,
                        borderColor: '#9013FE',
                        borderRadius: 15,
                        overflow: 'hidden',
                        color: this.state.isPrincess ? 'white' : 'rgba(69,90,255, .7)',
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingRight: 10,
                        paddingLeft: 10,
                        width: 100,
                        height: 32,
                        fontSize: 17,
                        backgroundColor: this.state.isPrincess ? '#9013FE' : 'white',
                      }}>Princess</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.setState(prevState => ({
                        isPrince: false,
                        isPrincess: false,
                        isMagical: !this.state.isMagical,
                        gender: ''
                      }))}
                    >
                      <Text style={{
                          textAlign: 'center',
                          borderWidth:1,
                          borderColor: '#9013FE',
                          borderRadius: 15,
                          color: this.state.isMagical ? 'white' : 'rgba(69,90,255, .7)',
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingRight: 10,
                          paddingLeft: 10,
                          marginRight: 20,
                          width: 100,
                          height: 32,
                          fontSize: 17,
                          overflow: 'hidden',
                          backgroundColor: this.state.isMagical ? '#9013FE' : 'white',
                      }}>Princex</Text>
                    </TouchableWithoutFeedback>
                </View>
            <Text style={styles.containerBottomTitle}> I am interested in...</Text>
                <TouchableWithoutFeedback onPress={() => this.setState(prevState => ({
                        isInterestedPrince: !this.state.isInterestedPrince,
                        isInterestedPrincess: false,
                        isInterestedMagical: false,
                        interested_gender: 'male'
                        }))}
                >
                  <Text 
                    style={{
                      textAlign: 'center',
                      width: 330,
                      height: 38,
                      marginRight: 22.5,
                      marginBottom: 5,
                      marginLeft: 22.5,
                      paddingTop: 8,
                      paddingBottom: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                      marginTop: 10,
                      borderWidth:1,
                      borderColor: '#9013FE',
                      borderRadius: 15,
                      fontSize: 17,
                      overflow: 'hidden',
                      color: this.state.isInterestedPrince ? 'white' : 'rgba(69,90,255, .7)',
                      backgroundColor: this.state.isInterestedPrince ? '#9013FE' : 'white'
                    }}>
                    Prince</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.setState(prevState => ({
                        isInterestedPrince: false,
                        isInterestedPrincess: !this.state.isInterestedPrincess,
                        isInterestedMagical: false,
                        interested_gender: 'female'
                        }))}
                >
                  <Text style={{
                    textAlign: 'center',
                    width: 330,
                    height: 38,
                    marginRight: 22.5,
                    marginBottom: 5,
                    marginLeft: 22.5,
                    paddingTop: 8,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                    marginTop: 10,
                    borderWidth:1,
                    borderColor: '#9013FE',
                    borderRadius: 15,
                    fontSize: 17,
                    overflow: 'hidden',
                    color: this.state.isInterestedPrincess ? 'white' : 'rgba(69,90,255, .7)',
                    backgroundColor: this.state.isInterestedPrincess ? '#9013FE' : 'white'
                  }}>
                  Princess</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.setState(prevState => ({
                        isInterestedPrince: false,
                        isInterestedPrincess: false,
                        isInterestedMagical: !this.state.isInterestedMagical,
                        interested_gender: ''
                        }))}
                >
                  <Text style={{
                    textAlign: 'center',
                    width: 330,
                    height: 38,
                    marginRight: 22.5,
                    marginBottom: 5,
                    marginLeft: 22.5,
                    paddingTop: 8,
                    paddingBottom: 5,
                    paddingRight: 10,
                    paddingLeft: 10,
                    marginTop: 10,
                    borderWidth:1,
                    borderColor: '#9013FE',
                    borderRadius: 15,
                    fontSize: 17,
                    overflow: 'hidden',
                    color: this.state.isInterestedMagical? 'white' : 'rgba(69,90,255, .7)',
                    backgroundColor: this.state.isInterestedMagical ? '#9013FE' : 'white'
                  }}>
                  Everyone</Text>
                </TouchableWithoutFeedback>
            
            <Text style={styles.containerBottomTitle1}> Maximum Age</Text>
            
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
            <TouchableWithoutFeedback onPress={this.backToLogIn}>
              <Text style={styles.logOutButton}>LOG OUT</Text>
            </TouchableWithoutFeedback>
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
    color: 'rgba(69,90,255, .7)',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 12,
    marginLeft: 20,
  },
  containerBottomTitle1: {
    color: 'rgba(69,90,255, .7)',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    marginLeft: 20,
  },
  genderButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 13
  },
  sliderText:{
    marginTop: 12,
    marginLeft: 15,
    fontSize: 17,
    color: 'rgba(69,90,255, .7)'
  },
  sliderBox1: {
    borderWidth:1,
    borderColor: '#9013FE',
    width: 330,
    marginLeft: 'auto',
    marginTop: 10,
    marginBottom: 18,
    marginRight: 22.5,
    marginLeft: 22.5,
    // shadowColor: 'blue',
    // shadowOffset: {width: 1, height: 1},
    // shadowRadius: 7,
    // shadowOpacity: 1,
    borderRadius: 6,
    paddingBottom: 5
  },
  sliderBox2: {
    borderWidth:1,
    borderColor: '#9013FE',
    width: 330,
    marginRight: 22.5,
    marginLeft: 22.5,
    marginTop: 10,
    marginBottom: 18,
    borderRadius: 6,
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
    borderWidth: 1,
    borderColor: '#9013FE',
    marginTop: 20,
  },
});

       

