import {StyleSheet} from 'react-native';
import { COLOR } from '../../../common/appconstants/Colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor:COLOR.background
  },
  scrollView:{
    marginTop: 10,
     padding: 16,
      marginBottom: 10
  },
  title:{
    color: COLOR.black,
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 16,
      marginTop: 20,
  },
  loading:{
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: COLOR.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles;
