import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import chatFaceData from '../constants/chatFaceData';
import {ChatbotType} from '../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from '../styles/homeScreen.styles';

//ALTERNATIVE TO HomeScreenProps

// type RootStackParamList = {
//   Home: undefined;
//   Chat: undefined;
// };
// type HomeScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'Home'
// >;
// type HomeScreenProps = {
//   navigation: HomeScreenNavigationProp;
// };

interface HomeScreenProps extends NativeStackScreenProps<any> {}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [chatbotsList, setChatbotsList] = useState<Array<ChatbotType>>();
  const [selectedChatbot, setSelectedChatbot] = useState<
    ChatbotType | undefined
  >();

  console.log(chatbotsList);

  useEffect(() => {
    setChatbotsList(chatFaceData);
    setSelectedChatbot(chatFaceData?.[0]);
  }, []);

  return selectedChatbot?.image ? (
    <SafeAreaView>
      <View style={styles.homeScreenContainer}>
        <Text
          style={[styles.introductionText, {color: selectedChatbot?.primary}]}>
          Yo! 👋
        </Text>
        <Text
          style={[styles.introductionText, {color: selectedChatbot?.primary}]}>
          It's me, {selectedChatbot?.name.toUpperCase()}!
        </Text>

        <Image
          source={{uri: selectedChatbot?.image}}
          style={styles.chatbotImage}
        />

        <Text style={styles.questionText}>How may I help you today?</Text>

        <View style={styles.chatbotOptions}>
          <FlatList
            data={chatbotsList?.filter(chatbot => chatbot !== selectedChatbot)}
            horizontal
            contentContainerStyle={styles.chatbotOptionsWrapper}
            renderItem={chatbot => (
              <TouchableOpacity
                onPress={() => setSelectedChatbot(chatbot.item)}>
                <Image
                  source={{uri: chatbot?.item?.image}}
                  width={40}
                  height={40}
                />
              </TouchableOpacity>
            )}
          />
          <Text style={styles.selectChatbotText}>
            Choose any of these chatbots
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Chat', {chatBot: selectedChatbot})
          }
          style={[
            styles.chatButton,
            {backgroundColor: selectedChatbot?.primary},
          ]}>
          <Text style={styles.chatButtonText}>Let's chat!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
