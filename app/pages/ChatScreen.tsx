import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import styles from '../styles/chatScreen.styles';
import {ChatbotType, MessageType} from '../types';
import ChatRenderer from '../components/ChatRenderer.component';

const ChatScreen = () => {
  const initialDate = new Date();
  const route = useRoute();
  const params: any = route.params;
  const {chatBot}: {chatBot: ChatbotType} = params;
  const [inputPrompt, setInputPrompt] = React.useState('');

  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: Date.now(),
      sender: 'ai',
      createdAt: initialDate.toDateString(),
      message: 'How are you?',
    },
  ]);

  const sendInputPrompt = () => {
    const date = new Date();
    setInputPrompt('');
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'user',
        createdAt: date.toDateString(),
        message: inputPrompt,
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.chatScreenContainer}>
        <SafeAreaView style={[styles.chatMessagesContainer]}>
          <ChatRenderer messages={messages} />
        </SafeAreaView>
        <View style={styles.chatInputContainer}>
          <TextInput
            placeholder="Ask me anything..."
            placeholderTextColor="#aaa"
            value={inputPrompt}
            onChangeText={setInputPrompt}
            onSubmitEditing={sendInputPrompt}
            style={styles.chatInputField}></TextInput>
          <TouchableOpacity
            style={styles.chatInputSend}
            onPress={sendInputPrompt}>
            <Image
              source={require('../../public/assets/send.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
