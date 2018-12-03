import React from 'react';
import {StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import axios from 'axios';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.name},  {this.props.age}</Text>
      </View>
    )
  }
}
 
class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>Searching for Potential Matches</Text>
      </View>
    )
  }
}
 
// images provided by http://jirkavinse.com/
const cardsMale = [
  {name: 'Charming', age: '28', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778296/princecharming.jpg'},
  {name: 'Flynn', age: '24', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778479/flynnrider.jpg'},
  {name: 'Hercules', age: '18', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778504/hercules.jpg'},
  {name: 'Naveen', age: '25', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778529/Naveen.jpg'},
  {name: 'Li Shang', age: '26', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778602/Shang.jpg'},
  {name: 'Phillip', age: '31', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778632/Phillip.jpg'},
  {name: 'John', age: '27', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778834/johnsmith.jpg'},
  {name: 'Eric', age: '23', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778873/eric.jpg'},
  {name: 'Ali', age: '25', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778892/Aladdin.jpg'},
  {name: 'Gaston', age: '34', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543778971/gaston.jpg'},
  {name: 'Tarzan', age: '28', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543779032/Tarzan.jpg'},
  {name: 'Kristoff', age: '20', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543779087/kristoff.jpg'},
]
 
const cardsFemale = [
  {name: 'Elsa', age: '24', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783039/elsa_frozen.jpg'},
  {name: 'Tiana', age: '25', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783148/tiana1.jpg'},
  {name: 'Ana', age: '20', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543782957/anna_frozen.jpg'},
  {name: 'Jasmine', age: '24', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783287/jasmine1.jpg'},
  {name: 'Aurora', age: '30', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543782999/aurora2.jpg'},
  {name: 'Rapunzel', age: '18', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783105/rapunzel1.jpg'},
  {name: 'Snow', age: '29', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783195/snowwhite.jpg'},
  {name: 'Cinderella', age: '27', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783335/cinderella1.jpg'},
  {name: 'Belle', age: '26', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783457/belle.jpg'},
    {name: 'Mulan', age: '25', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783861/moana.jpg'},
  {name: 'Merida', age: '21', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783399/merida.jpg'},
  {name: 'Meg', age: '22', image: 'https://res.cloudinary.com/drsaojfyp/image/upload/v1543783759/megara.jpg'},
  {name: 'Moana', age: '18', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
]
 
export default class App extends React.Component {
  state = {
      cards: cardsMale,
      outOfCards: true,
      interested_gender: '',

    }

  async componentDidMount() {
      
      const userID = await this._retrieveData()
      console.log('User Id Works: ', userID)
      
      let getInfo = async () => {
        let url=`http://192.168.0.4:3001/disneyDates/gender/${userID}`
        console.log(url)
        
        try {
         let data = await axios.get(url)
                    .then( res => {
                      console.log(res.data)
                      this.setState(prevState => ({
                        interested_gender: res.data.data.interested_gender,
                      }))
                      console.log('THIS IS STATE: ', this.state)
                      if (this.state.interested_gender === 'male') {
                          this.setState(prevState => ({
                            cards: cardsMale,
                          }))
                      } else if (this.state.interested_gender === 'female') {
                          this.setState(prevState => ({
                            cards: cardsFemale,
                          }))
                      } else {
                          this.setState(prevState => ({
                            cards: this.state.cardsFemale
                          }))
                      }
                    })
                    .catch(err => {
                      console.log(err)});
        } catch (error) {
              console.log('ERROR')
        }
      }

      let info = await getInfo()
      // let cardsShown = await genderReveal()
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
 
 
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}
 
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={false}
        showNope={false}
 
      />
    )
  }
}
 
const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: '#9013FE',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    marginBottom: 40
  },
  image: {
    width: 362,
    height: 650,
  },
  text: {
    fontSize: 25,
    padding: 10,
    position: 'absolute',
    top: 590,
    marginLeft: 15,
    color: 'white',
    textShadowColor: '#8E3AFF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 8,
    width: 200,
    fontWeight: 'bold'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})