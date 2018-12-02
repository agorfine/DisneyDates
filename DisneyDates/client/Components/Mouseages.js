import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import Pusher from 'pusher-js/react-native';

export default class Mouseages extends React.Component {

  async componentDidMount() {
    try {
      Pusher.logToConsole = true;

    var pusher = new Pusher('5ee03199f6126739042f', {
      cluster: 'us2',
      forceTLS: true
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      alert(data.message);
    });
    } catch(error){

    }
  }

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
            <Text style={styles.containerBottomTitle}> Mouseages </Text>
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
    color: '#9013FE',
    fontSize: 15,
    marginTop: 15,
    marginLeft: 10,
  },
  newChatContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  newChat: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    borderRadius: 80/2,
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 3
  },
  newChatLast: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    borderRadius: 80/2,
    width: 80,
    height: 80,
    marginLeft: 10,
    marginRight: 10
  }
});




