import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {MessageType} from '../types';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../styles/chatRenderer.style';

const ChatRenderer = ({messages}: {messages: MessageType[]}) => {
  console.log('::', messages);
  return (
    <ScrollView style={styles.chatRendererContainer}>
      {messages.map((message, index) => {
        const isUser = message.sender === 'user';
        return (
          <View
            key={index}
            style={[
              styles.messageContainer,
              {justifyContent: isUser ? 'flex-end' : 'flex-start'},
            ]}>
            <View
              key={index}
              style={[
                styles.messageBox,
                isUser ? styles.userMessage : styles.aiMessage,
              ]}>
              <Text style={{color: isUser ? '#fff' : '#000'}}>
                {message.message}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ChatRenderer;
