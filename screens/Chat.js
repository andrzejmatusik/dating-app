import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
// import { Dialogflow_V2 } from 'react-native-dialogflow';
// import { dialogflowConfig } from '../components/Env';

export default function Messages({ route }) {
  const { title, img, bg } = route.params;
  const [messages, setMessages] = useState([]);
  const DATE_BOT = {
    _id: 2,
    name: title,
    avatar: img
  };
  useEffect(() => {
    // Dialogflow_V2.setConfiguration(
    //   dialogflowConfig.client_email,
    //   dialogflowConfig.private_key,
    //   Dialogflow_V2.LANG_ENGLISH_US,
    //   dialogflowConfig.project_id
    // );
    setMessages([
      {
        _id: 1,
        text: `Hello. What's your name?`,
        createdAt: new Date(),
        user: DATE_BOT
      },
    ]);
  }, []);
  const handleGoogleResponse = (result) => {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  };
  const onSend = (messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    let message = messages[0].text;
    // Dialogflow_V2.requestQuery(
    //   message,
    //   result => handleGoogleResponse(result),
    //   error => console.log(error)
    // );
  };
  const sendBotResponse = (text) => {
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: DATE_BOT
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, [msg]));
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#fff'
          },
          right: {
            backgroundColor: bg
          }
        }}
      />
    )
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
          _id: 1,
      }}
      renderBubble={renderBubble}
    />
  );
}