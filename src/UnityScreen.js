import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';

const UnityScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello UNT Developers</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('About')}>
          <Text style={styles.btn_text}>Go to About Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Oswald-Bold',
    fontSize: hp(4),    
    // fontWeight: 'bold',
    marginBottom: hp(4),
  },
  btn: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(14),
    backgroundColor: '#841584',
    borderRadius: hp(2),
  },
  btn_text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: hp(2),
  },
});

export default UnityScreen;
