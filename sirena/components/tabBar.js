import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GoalsScreen from './goals';

const Tab = createBottomTabNavigator();

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <Tab.Navigator >
        <Tab.Screen  name="Goals" component={GoalsScreen} />
    </Tab.Navigator>
  );
}
