import {StyleSheet} from 'react-native';
import { COLOR } from '../../../common/appconstants/Colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor:COLOR.background
  },
  sectionTitle:{
    color:COLOR.black,
    fontSize:25,
    fontWeight:'bold',
    marginBottom:16,
    marginTop:20,
  }
});

export default styles;
