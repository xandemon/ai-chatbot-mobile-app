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
import {ChatbotType, MessageType, PromptResponseData} from '../types';
import ChatRenderer from '../components/ChatRenderer.component';
import {getPromptResponse} from '../services/getPromptResponse';

const ChatScreen = () => {
  const initialDate = new Date();
  const route = useRoute();
  const params: any = route.params;
  const {chatBot}: {chatBot: ChatbotType} = params;
  const [inputPrompt, setInputPrompt] = React.useState('');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: Date.now(),
      sender: 'ai',
      createdAt: initialDate.toDateString(),
      message: 'How are you?',
    },
  ]);

  const clearInputPrompt = () => {
    setInputPrompt('');
  };

  const renderPromptResponse = async (tempMessages: MessageType[]) => {
    const date = new Date();
    console.log('!!renderpromptResponse', messages);
    // const tempMessages = messages;
    setLoading(true);
    const data: PromptResponseData = await getPromptResponse({
      prompt: inputPrompt,
    })
      .then(response => response.data)
      .catch(error => error);
    setLoading(false);
    console.log('response', data);
    const updatedMessages = [
      ...tempMessages,
      {
        id: Date.now(),
        sender: 'ai',
        createdAt: date.toDateString(),
        message: data.resp[1].content,
      },
    ];
    setMessages(updatedMessages);
  };

  const sendInputPrompt = () => {
    const date = new Date();
    console.log('!!sendInputPrompt', messages);
    const tempMessages = messages;
    tempMessages.push({
      id: Date.now(),
      sender: 'user',
      createdAt: date.toDateString(),
      message: inputPrompt,
    });
    setMessages(tempMessages);

    renderPromptResponse(tempMessages);
    clearInputPrompt();
  };

  useEffect(() => {
    console.log('messages', messages);
  }, [messages]);

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
