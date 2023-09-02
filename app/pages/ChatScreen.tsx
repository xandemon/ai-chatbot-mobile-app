import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {ChatbotType} from '../types';
import {useRoute} from '@react-navigation/native';
import styles from '../styles/chatScreen.styles';

const ChatScreen = () => {
  const route = useRoute();
  const params = route.params;
  const [inputPrompt, setInputPrompt] = React.useState('');

  const sendInputPrompt = () => {
    console.log('>>>', inputPrompt);
    setInputPrompt('');
  };

  return (
    <SafeAreaView>
      <View style={styles.chatScreenContainer}>
        <View style={styles.chatMessagesContainer}></View>
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
