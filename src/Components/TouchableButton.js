import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function TouchableButton({
  propColor,
  placeholder,
  onPress,
  disabled = false,
}) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.7}>
      <View
        style={{
          height: hp(7),
          width: wp(90),
          backgroundColor: propColor,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf:'center',
          marginTop: 20,
          borderRadius: 5,
        }}>
        <Text style={{fontSize: wp(4), fontWeight: 'bold', color: '#fff'}}>
          {placeholder}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
