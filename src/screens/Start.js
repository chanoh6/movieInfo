import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const Start = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Text>시작하기 페이지</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Start;
