import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default class Chat extends React.Component {
  state = {
    messages: []
  };

  async componentDidMount() {
    try {
      this.setState({
        messages: [
          {
            _id: 1,
            text: "I think we passed the first step of the tutorial. We will now need a Pusher account!",
            createdAt: new Date(),
            user: {
              _id: 1,
              name: "React Native",
              avatar: "https://placeimg.com/140/140/any"
            }
          }
        ]
      });
    } catch(error) {

    }
  }

  render() {
    return <GiftedChat messages={this.state.messages} />;
  }
}