import {View, Text} from 'react-native';
import React from 'react';
import {ChatbotType} from '../types';

const ChatScreen = ({chatBot}: {chatBot?: ChatbotType}) => {
  console.log(chatBot);

  return (
    <View>
      <Text style={{color: 'black'}}>This is chat!</Text>
    </View>
  );
};

export default ChatScreen;
