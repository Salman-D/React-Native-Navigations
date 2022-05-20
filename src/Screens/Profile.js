import { View, Text } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'

const Profile = () => {

    const route = useRoute()
    
    console.log(route.params)

    const {UserName , UserEmail , UserPassword} = route.params
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Name: {UserName}</Text>
                <Text>Email: {UserEmail}</Text>
                <Text>Password: {UserPassword}</Text>
            </View>
        </View>
    )
}

export default Profile