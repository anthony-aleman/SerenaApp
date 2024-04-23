import React, { useState } from "react"; 
import { 
    View, 
    Text,
    StyleSheet, 
    Button
} from "react-native";

const GoalsScreen = ({navigation}) => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Goals Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')} />
      </View>
    );
  
};

export default GoalsScreen;