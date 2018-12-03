import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import Pusher from 'pusher-js/react-native';

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
        <View style={styles.bottom}>
            <Text style={styles.containerBottomTitle}> Become Part of Their World . . . </Text>
            <ScrollView horizontal={true} style={styles.newChatContainer}>
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man7.jpg')}
              />
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man8.jpg')}
              />
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man2.jpg')}
              />
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man4.jpg')}
              />
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man3.jpg')}
              />
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man5.jpg')}
              />
              <Image
                    style= {styles.newChat} 
                    source= {require('../assets/man1.jpg')}
              />
              <Image
                    style= {styles.newChatLast} 
                    source= {require('../assets/man6.jpg')}
              />
            </ScrollView>
            <Text style={styles.containerBottomTitle1}> Mouseages </Text>
            <ScrollView>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man9.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Chris</Text>
                  <Text style={styles.chatLine}>Do you trust me?</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man11.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Michael</Text>
                  <Text style={styles.chatLine}>Can you feel the love tonight?</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man10.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Jesse</Text>
                  <Text style={styles.chatLine}>I can take you to infinity and ...</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man15.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Chris</Text>
                  <Text style={styles.chatLine}>You are the beuty to my beast</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man14.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Aaron</Text>
                  <Text style={styles.chatLine}>You've got a friend in me</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man16.jpeg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Arjun</Text>
                  <Text style={styles.chatLine}>Hey! How was your weekend?</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man17.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>John</Text>
                  <Text style={styles.chatLine}>You are part of the circle of my...</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man18.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Domhnall</Text>
                  <Text style={styles.chatLine}>Hi nice to meet you!</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man19.jpg')}
                />
                <View style = {styles.textBoxBottom}>
                  <Text style={styles.name}>Jack</Text>
                  <Text style={styles.chatLine}>How is your week going?</Text>
                </View>
              </View>
              <View style={styles.mouseagesContainer}>  
                <Image
                      style= {styles.newChatLast} 
                      source= {require('../assets/man20.jpeg')}
                />
                <View style = {styles.textBoxBottomLast}>
                  <Text style={styles.name}>Dimitri</Text>
                  <Text style={styles.chatLine}>Love your Disney moment!</Text>
                </View>
              </View>
            </ScrollView>
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
  bottom: {
    height: 680
  },
  containerBottomTitle: {
    color: '#9013FE',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 10
  },
  containerBottomTitle1: {
    color: '#9013FE',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 15
  },
  newChatContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  newChat: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    borderRadius: 80/2,
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 3,
    marginBottom: 30
  },
  newChatLast: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    borderRadius: 80/2,
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10
  },
  scrollBottom: {
    height: 100,
    marginBottom: 100
  },
  mouseagesContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  textBoxBottom: {
    borderBottomColor: 'rgba(69, 90, 255, .7)',
    borderBottomWidth: 1,
    marginLeft: 5,
    width: 320,
    height: 90
  },
  textBoxBottomLast: {
    marginLeft: 5,
    width: 320,
    height: 90
  },
  name: {
    marginLeft: 15,
    fontSize: 20,
    color: '#9013FE',
    fontWeight: 'bold',
    marginTop: 15
  },
  chatLine: {
    marginLeft: 15,
    marginTop: 5,
    fontSize: 16,
    color: 'rgba(69, 90, 255, .7)',
  }
});




