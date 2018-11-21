import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import * as Expo from 'expo'


export default class LogInPage extends React.Component {
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

    logIn = async () => {
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
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
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
        <Button title  = 'CONTINUE WITH FACEBOOK'  style= {styles.button} buttonStyle= {styles.buttonStyle} textStyle = {styles.textStyle} onPress={this.logIn} />
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
    	color: '#455AFF'
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