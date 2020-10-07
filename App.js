import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import Semesters from './src/screens/Semesters';
import Sem1 from './src/screens/Sem1';
import Sem2 from './src/screens/Sem2';
import Sem3 from './src/screens/Sem3';
import Faculty from './src/screens/Faculty';
import Profile from './src/screens/Profile';

const stack = createStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomeScreen}></stack.Screen>
        <stack.Screen name="List" component={ListScreen}></stack.Screen>
        <stack.Screen name="Semesters" component={Semesters}></stack.Screen>
        <stack.Screen name="Sem1" component={Sem1}></stack.Screen>
        <stack.Screen name="Sem2" component={Sem2}></stack.Screen>
        <stack.Screen name="Sem3" component={Sem3}></stack.Screen>
        <stack.Screen name="Faculty" component={Faculty}></stack.Screen>
        <stack.Screen name="Profile" component={Profile}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;