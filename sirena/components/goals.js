import React, { useState } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native";

const GoalsScreen = ({navigation}) => {

  const OnPressNavigate = () => {
    console.log('Goals Screen Button Pressed');
    navigation.navigate('Home');
  };
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Goals Screen</Text>
        
      </View>
    );
  
};

export default GoalsScreen;