import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IconButton = ({ icon, onPress, color }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.beforebutton,
        pressed && styles.button
      ]}
      onPress={onPress}
    >
      <AntDesign name={icon} size={24} color={color} />
    </Pressable>
  )
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    // padding: 10,
    // borderRadius: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    opacity: 0.7,
    marginHorizontal: 10
  },
  beforebutton: {
    marginHorizontal: 10
  }
});
