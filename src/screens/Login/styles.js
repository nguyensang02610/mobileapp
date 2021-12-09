import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08d4c4',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  ViewImage: {
    width: 163 * 1.8,
    height: 119 * 1.8,
    alignSelf: 'center',
    marginTop: 40,
  },
  ViewTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 2,
    marginTop: 50,
    paddingHorizontal: 10,
    borderColor: '#ea1c1c',
    borderRadius: 23,
    paddingVertical: 2,
  },
  ViewButtom: {
    marginHorizontal: 55,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#ea1c1c',
    paddingVertical: 16,
    borderRadius: 23,
  },
  TxtLogin: {
    color: 'white',
    fontFamily: 'SemiBold',
    fontSize: 20,
  },
  TxtRegister: {
    alignSelf: 'center',
    color: '#ea1c1c',
    fontFamily: 'SemiBold',
    paddingVertical: 25,
    fontSize: 18,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginHorizontal: 65,
    marginTop: 12,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
