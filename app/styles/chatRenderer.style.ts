import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  chatRendererContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
    flexDirection: 'column-reverse',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
  },
  messageBox: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: 200,
    borderRadius: 8,
  },
  aiMessage: {
    borderBottomLeftRadius: 0,
    backgroundColor: '#ccc',
  },
  userMessage: {
    borderBottomRightRadius: 0,
    backgroundColor: '#279EFF',
  },
});

export default styles;
