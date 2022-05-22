import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigations  from './src/Screens/Bottom_Navigation/BottomNavigations';
// import Profile from './src/Screens/Profile';
//  import Screen1 from './src/Screens/Screen1';
//  import Screen2 from './src/Screens/Screen2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigations"
         options={{headerShown:false}} 
         component={BottomNavigations} />
         
        {/* <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Screen2" component={Screen2} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;