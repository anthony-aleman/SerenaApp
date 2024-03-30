import React, { useState } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native";

const GoalsScreen = ({navigation, route}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Goals Screen</Text>
        <Text>This is  profile</Text>
      </View>
    );
  
};

export default GoalsScreen;