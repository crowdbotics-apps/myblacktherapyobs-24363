import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
const Home = props => {
  useEffect(() => {
    console.log('balled');
  }, []);
  return (
    <View style={{}}>
      <Text>home</Text>
    </View>
  );
};

export default Home;
