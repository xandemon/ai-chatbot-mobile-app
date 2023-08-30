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
          onPress={() => navigation.navigate('Chat')}
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

const styles = StyleSheet.create({
  homeScreenContainer: {
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Dimensions.get('screen').height * 0.03,
    backgroundColor: '#f5f5f5',
  },
  introductionText: {
    fontSize: 32,
    fontWeight: '700',
  },
  chatbotImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  questionText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
  },
  chatbotOptions: {
    height: 100,
    width: Dimensions.get('screen').width * 0.8,
    padding: 12,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 8,
    borderRadius: 12,
    backgroundColor: '#e2e2e2',
  },
  chatbotOptionsWrapper: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.75,
  },
  selectChatbotText: {
    color: '#333',
  },
  chatButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  chatButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
