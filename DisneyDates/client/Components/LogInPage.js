import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import * as Expo from 'expo'
import * as firebase from 'firebase';
import axios from 'axios';


export default class LogInPage extends React.Component {
	state= {
	    fontLoaded: false,
      firstName: '',
      lastName: '',
      gender: '',
      id: '',
      email: '',
	}

	async componentDidMount() {
      // const session = await asyncStorage.getItem('user')
      // if(session)
    await Expo.Font.loadAsync({
      'disneyFont': require('../assets/disneyFont.otf')
    })
    this.setState({
      fontLoaded: true
    })
    this.config()
	};
  
  config = async () => {
    try {
      if (!firebase.apps.length) {
        await firebase.initializeApp({
            apiKey: "AIzaSyAElmawhy1xNa3CljgfREK0OzN38aldh5w",
            authDomain: "disneydates-app.firebaseapp.com",
            databaseURL: "https://disneydates-app.firebaseio.com",
            projectId: "disneydates-app",
            storageBucket: "disneydates-app.appspot.com",
            messagingSenderId: "435745495009",});
      }
    }catch(error){

    }
  }
  

  logIn = async () => {
      auth = firebase.auth();
      //if user exists in local storage grab user profile from database
      try {
          const {
              type,
              token,
              expires,
              permissions,
              declinedPermissions,
          } = await Expo.Facebook.logInWithReadPermissionsAsync("450163875513165", {
              permissions: ['public_profile', 'email'],
          });
          
          if (type === 'success') {
              let response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              let credential = await firebase.auth.FacebookAuthProvider.credential(token);
              let currentUser = await auth.signInAndRetrieveDataWithCredential(credential) 

              // console.log(Object.keys(currentUser))

              // console.log('THIS IS USER KEY ', currentUser.user)
              // console.log('THIS IS credential KEY ', currentUser.credential)
              console.log('THIS IS additionaluserinfo KEY ', currentUser.additionalUserInfo)
              // console.log('THIS IS TOKEN ', token)
              // console.log('THIS IS operationtype KEY ', currentUser.operationType)


              let firstName = await currentUser.additionalUserInfo.profile.first_name
              let lastName = await currentUser.additionalUserInfo.profile.last_name
              let gender = await currentUser.additionalUserInfo.profile.gender
              let id = await currentUser.additionalUserInfo.profile.id
              let email = await currentUser.additionalUserInfo.profile.email
              let newUser = await currentUser.additionalUserInfo.isNewUser

              this.setState(prevState => ({
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                id: id,
                email: email
              }))

              let checkfirstname = await console.log('firstname ', firstName)
              let checklastname = await console.log('lastname ', lastName)
              let checkgender = await console.log('gender ', gender)
              let checknewUser = await console.log('new user: ', newUser)

              let userDB = async (id, firstName, lastName, gender, email) => {
                try {
                 let data = await axios.post('http://192.168.0.4:3001/disneyDates/createUser', {
                            fb_id: this.state.id,
                            firstname: this.state.firstName,
                            lastname: this.state.lastName,
                            email: this.state.email,
                            age: '',
                            gender: this.state.gender,
                            interested_gender: '',
                            work: '',
                            education: '',
                            magical_moment: '',
                            disney_character: '',
                            disney_movie: '',
                            disney_park: '',
                            disney_attraction: '',
                          })
                           .then(res => {
                            console.log(res.data);
                          })
                          .catch(err => console.log(err)
                        )
                } catch (error) {
                  
                }
              }
              
              
              let storeUser = async () => {
                try {
                    await AsyncStorage.setItem('fb_id', this.state.id);
                } catch (error) {

                }
              }   

            let store = await storeUser()
            
           postData = async () => {
                try {
                    if(newUser === true) {
                      let newPerson = await userDB(id, firstName, lastName, gender, email)
                      {this.props.navigation.navigate('SettingsPage')}
                   } else {
                      {this.props.navigation.navigate('SwipePage')}
                   }
                } catch (error) {

                }
              }   
          let postIt = await postData()    
          
          } else {
              // type === 'cancel'
          }
      } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
      }
  }

  render() {
      return (
          <View style={styles.container}>
	      	<View style={styles.imageContainer}>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      		<Image style= {styles.heart} source= {require('../assets/heartIcon.png')}/>
	      	</View>
	      	{this.state.fontLoaded ? (<Text style={styles.text} h2>Disney Dates</Text>): null }
	        <Image style= {styles.logo} source= {require('../assets/disneyLogo512.png')}/>
	        <Button 
	        	title  = 'CONTINUE WITH FACEBOOK'  
	        	style= {styles.button} 
	        	buttonStyle= {styles.buttonStyle} 
	        	textStyle = {styles.textStyle} 
	        	onPress={this.logIn} 
	        />
    		</View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 45
    },
    heart: {
        width: 50,
        height: 50,
    },
    text: {
        textAlign: 'center',
        fontFamily: 'disneyFont',
        fontSize: 70,
        paddingTop: 15,
        height: 80,
    	color: 'rgba(69, 90, 255, .7)',
    	textShadowColor: '#8E3AFF',
    	textShadowOffset: {width: 1, height: 1},
    	textShadowRadius: 7
    },
    logo: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        paddingTop: 15,
        marginBottom: 10
    },
    button: {
        paddingVertical: 60,
        marginBottom: 100,
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#455AFF',
        height: 60 
    },
    textStyle: {
        color: '#455aff',
    }
});