import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, Image, TextInput } from 'react-native';

export default class EditProfile extends React.Component {
  state= {
      fontLoaded: false,
      text: '',
  }

  async componentDidMount() {
      await Expo.Font.loadAsync({
        'disneyFont': require('../assets/disneyFont.otf')
      })
      this.setState({
        fontLoaded: true
      })
  };

  render() {
  
    return (
      <View style={styles.container}>
        <View style = {styles.containerTop}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SettingsPage')}>
                <Image
                    style= {styles.settingsButton} 
                    source= {require('../assets/settings.png')}
                />
            </TouchableWithoutFeedback>  

            {this.state.fontLoaded ? (<Text style={styles.text} h2>Disney Dates</Text>): null }
            
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SwipePage')}>
                <Image
                    style= {styles.saveButton} 
                    source= {require('../assets/save.png')}
                />
            </TouchableWithoutFeedback>  
        </View>
        
        <View style={styles.containerSecond}>
            <View style= {styles.photosTop}>
                <Image
                      style= {styles.photo1} 
                      source= {require('../assets/pic1.jpg')}
                />
                <Image
                      style= {styles.photo} 
                      source= {require('../assets/pic2.jpg')}
                />
                <Image
                      style= {styles.photo3} 
                      source= {require('../assets/pic3.jpg')}
                />
            </View>
            <View style= {styles.photosBottom}>
              <Image
                      style= {styles.photo1} 
                      source= {require('../assets/pic6.jpg')}
                />
                <Image
                      style= {styles.photo} 
                      source= {require('../assets/pic5.jpg')}
                />
                <Image
                      style= {styles.photo3} 
                      source= {require('../assets/add.png')}
                />
            </View>
        </View>

        <View style={styles.containerThird}>
          <ScrollView>
              <Text style= {styles.titleText1}>My work & education</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add work..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(text) => this.setState({text})}
              />
              <TextInput
                style = {styles.inputBox}
                placeholder="Add education..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(text) => this.setState({text})}
              />
              <Text style= {styles.titleText}>Most magical Disney moment</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add most magical Disney moment..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {200}
                onChangeText={(text) => this.setState({text})}
              />
              <Text style= {styles.titleText}>Which Disney character describes you?</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add Disney character..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(text) => this.setState({text})}
              />
              <Text style= {styles.titleText}>Favorite Disney Movie</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add favorite Disney movie..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(text) => this.setState({text})}
              />
              <Text style= {styles.titleText}>Favorite Disney park</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add favorite Disney park..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(text) => this.setState({text})}
              />
              <Text style= {styles.titleText}>Favorite Disney attraction</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add favorite Disney attraction..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(text) => this.setState({text})}
              />
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
    paddingTop: 50,
    height: 105,
    borderBottomColor: '#9013FE',
    borderBottomWidth: 1,
  },
  settingsButton: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginTop: 3,
  },
  middleTitle: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'disneyFont',
    fontSize: 37,
    marginTop: 3,
    paddingTop: 5,
    width: 200,
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
  saveButton: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginTop: 3
  },
  containerSecond: {
    height: 218
  },
  photosTop: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 12,
  },
  photosBottom: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 12,
  },
  photo: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    borderRadius: 90/2,
    width: 90,
    height: 90,
  },
  photo1: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    borderRadius: 90/2,
    width: 90,
    height: 90,
    marginLeft: 20
  },
  photo3: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0)',
    alignItems:'center',
    borderRadius: 90/2,
    width: 90,
    height: 90,
    marginRight: 20
  },
  containerThird: {
    flex: 2,
  },
  titleText1: {
    color: '#4F56FF',
    fontSize: 17,
    marginLeft: 20,
  },
  titleText: {
    color: '#4F56FF',
    fontSize: 17,
    marginLeft: 20,
    marginTop: 7
  },
  inputBox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 3,
    marginBottom: 5,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9013FE',
    color: 'rgb(69,90,255)'
  },
});




