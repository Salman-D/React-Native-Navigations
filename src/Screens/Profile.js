import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRoute , useNavigation} from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation();

    // const route = useRoute()
    
    // console.log(route.params)

    // const {UserName , UserEmail , UserPassword} = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Profile
            </Text>

            <TouchableOpacity style={{marginTop:20}} onPress={()=>{navigation.navigate("Settings")}} >
                <Text style={{color:"red"}}>
                    Goto Setings
                </Text>
            </TouchableOpacity>
            {/* <View>
                <Text>Name: {UserName}</Text>
                <Text>Email: {UserEmail}</Text>
                <Text>Password: {UserPassword}</Text>
            </View> */}
        </View>
    )
}

export default Profile