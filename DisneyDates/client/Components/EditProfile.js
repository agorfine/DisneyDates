import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableWithoutFeedback, Image, TextInput, AsyncStorage } from 'react-native';
import axios from 'axios';

export default class EditProfile extends React.Component {
  state= {
      fontLoaded: false,
      fb_id: '',
      age: '',
      work: '',
      education: '',
      magicalMoment: '',
      disneyCharacter: '',
      disneyMovie: '',
      disneyPark: '',
      disneyAttraction: '',
  }

  async componentDidMount() {
      await Expo.Font.loadAsync({
        'disneyFont': require('../assets/disneyFont.otf')
      })
      this.setState({
        fontLoaded: true
      })
      const userID = await this._retrieveData()
      console.log('THANKS KOZAK', userID)
      
      let getInfo = async () => {
        let url=`http://192.168.0.4:3001/disneyDates/users/${userID}`
        console.log(url)
        
        try {
         let data = await axios.get(`http://192.168.0.4:3001/disneyDates/users/${userID}`)
                    .then( res => {
                      console.log(res.data)
                      this.setState(prevState => ({
                        fb_id: res.data.data.fb_id,
                        age: res.data.data.age,
                        work: res.data.data.work,
                        education: res.data.data.education,
                        magicalMoment: res.data.data.magical_moment,
                        disneyCharacter: res.data.data.disney_character,
                        disneyMovie: res.data.data.disney_movie,
                        disneyPark: res.data.data.disney_park,
                        disneyAttraction: res.data.data.disney_attraction
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
  };

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

  pushData = async () => {
      const userID = await this._retrieveData()
      console.log('THANKS KOZAK pt2', userID)
      this.setState(prevState => 
        ({ fb_id: userID 
        }))

      try {
        let data = await axios.put(`http://192.168.0.4:3001/disneyDates/users/${userID}`, {
                              fb_id: this.state.fb_id,
                              age: this.state.age,
                              work: this.state.work,
                              education: this.state.education,
                              magical_moment: this.state.magicalMoment,
                              disney_character: this.state.disneyCharacter,
                              disney_movie: this.state.disneyMovie,
                              disney_park: this.state.disneyPark,
                              disney_attraction: this.state.disneyAttraction,
                            })
                             .then(res => {
                              console.log(res.data);
                            })
                            .catch(err => console.log(err)
                          )
       } catch (error) {
          console.log('ERROR with push')
       }
       {this.props.navigation.navigate('SwipePage')}
    }

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
            
            <TouchableWithoutFeedback onPress={this.pushData}>
                <Image
                    style= {styles.saveButton} 
                    source= {require('../assets/save.png')}
                />
            </TouchableWithoutFeedback>  
        </View>
        
        <ScrollView>
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
          
              <Text style= {styles.titleText1}>Age</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add age..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(age) => this.setState(prevState => ({ age }))}
                value= {this.state.age}
              />
              <Text style= {styles.titleText}>My work & education</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add work..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(work) => this.setState(prevState => ({ work }))}
                value= {this.state.work}
              />
              <TextInput
                style = {styles.inputBox}
                placeholder= 'Add education...'
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(education) => this.setState(prevState => ({ education }))}
                value= {this.state.education}
              />
              <Text style= {styles.titleText}>Most magical Disney moment</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add most magical Disney moment..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {200}
                onChangeText={(magicalMoment) => this.setState(prevState => ({ magicalMoment }))}
                value= {this.state.magicalMoment}
              />
              <Text style= {styles.titleText}>Which Disney character describes you?</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add Disney character..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(disneyCharacter) => this.setState(prevState => ({ disneyCharacter }))}
                value= {this.state.disneyCharacter}
              />
              <Text style= {styles.titleText}>Favorite Disney Movie</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add favorite Disney movie..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(disneyMovie) => this.setState(prevState => ({ disneyMovie }))}
                value= {this.state.disneyMovie}
              />
              <Text style= {styles.titleText}>Favorite Disney park</Text>
              <TextInput
                style = {styles.inputBox}
                placeholder="Add favorite Disney park..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(disneyPark) => this.setState(prevState => ({ disneyPark}))}
                value= {this.state.disneyPark}
              />
              <Text style= {styles.titleText}>Favorite Disney attraction</Text>
              <TextInput
                style = {styles.inputBox1}
                placeholder="Add favorite Disney attraction..."
                placeholderTextColor="rgba(69,90,255, .6)"
                maxLength = {100}
                onChangeText={(disneyAttraction) => this.setState(prevState => ({ disneyAttraction }))}
                value= {this.state.disneyAttraction}
              />
        
        </View>
        </ScrollView>
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
  inputBox1: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 3,
    marginBottom: 35,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9013FE',
    color: 'rgb(69,90,255)'
  },
});




