import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    console.log(navigation)
    function HandleNavigation(ScreenName){
        navigation.navigate(ScreenName)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View >
                <TouchableOpacity 
                    style={{ backgroundColor: "lightblue", padding: 20, marginBottom: 20 }}
                    onPress={()=>HandleNavigation('Screen1')}
                >
                    <Text>
                        Screen 1
                    </Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity
                    onPress={()=>HandleNavigation('Screen2')}
                    style={{ backgroundColor: "lightblue", padding: 20, marginBottom: 20 }}
                >
                    <Text>
                        Screen 2
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeScreen