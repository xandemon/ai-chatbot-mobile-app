import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chatScreenContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
  },
  chatMessagesContainer: {
    // backgroundColor: '#000',
  },
  chatInputContainer: {
    position: 'relative',
    margin: 12,
  },
  chatInputField: {
    color: '#333',
    fontSize: 12,
    height: 40,
    paddingLeft: 12,
    paddingRight: 40,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  chatInputSend: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{translateY: -10}],
  },
});

export default styles;
