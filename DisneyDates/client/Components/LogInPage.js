import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import * as Expo from 'expo'
import * as firebase from 'firebase';
import axios from 'axios';


export default class LogInPage extends React.Component {
	state= {
	    fontLoaded: false,
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
	};

    config = firebase.initializeApp ({
        apiKey: "AIzaSyAElmawhy1xNa3CljgfREK0OzN38aldh5w",
        authDomain: "disneydates-app.firebaseapp.com",
        databaseURL: "https://disneydates-app.firebaseio.com",
        projectId: "disneydates-app",
        storageBucket: "disneydates-app.appspot.com",
        messagingSenderId: "435745495009",
    });

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
                permissions: ['public_profile', 'user_gender', 'user_age_range', 'user_photos'],
            });
            
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                console.log(response)

                const credential = await firebase.auth.FacebookAuthProvider.credential(token);
                let currentUser = await auth.signInAndRetrieveDataWithCredential(credential)  
                
                let displayName = await currentUser.user.displayName

                let data = await console.log('THIS IS USER NAME', currentUser.user.displayName)

                userDb = async (currentUser) => {
                   let result = await console.log(axios.post('http://173.2.3.208:3001/disneyDates/createUser', {
                    fb_id: displayName,
                    firstname: '',
                    lastname: '',
                    email: '',
                    age: '',
                    gender: '',
                    interested_gender: '',
                    work: '',
                    education: '',
                    magical_moment: '',
                    disney_character: '',
                    disney_movie: '',
                    disney_park: '',
                    disney_attraction: ''
                }))

                console.log(result)
                     
                }
               
               // userDb(currentUser)
                
               //  storeUser = async () => {
               //      try {
               //          await AsyncStorage.setItem('username', currentUser);
               //      } catch (error) {

               //      }
               //  }   


               
                {this.props.navigation.navigate('EditProfile')}
            
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