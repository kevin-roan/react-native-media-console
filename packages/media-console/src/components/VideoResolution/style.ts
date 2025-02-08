import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},

  icon: {
    height: 20,
    width: 20,
    marginLeft: 5,
    tintColor: '#999999',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10000,
    justifyContent: 'center',
  },
  modal: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '50%',
    width: '50%',
  },

  modalSwitch: {
    padding: 17,
  },
  seperator: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#fafafa',
    width: '94%',
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  selectedQuality: {
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
  },
});
