import {Dimensions, StyleSheet} from 'react-native';

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

export default styles;
