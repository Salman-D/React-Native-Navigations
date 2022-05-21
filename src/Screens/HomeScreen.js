import { View, Text, TouchableOpacity, Dimensions , TextInput , StyleSheet} from 'react-native'
import React,{useState} from 'react'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = ({navigation}) => {

    const navigationhook = useNavigation();
    // console.log(navigationhook)

    const [Name , setName]=useState("")
    const [Email , setEmail]=useState("")
    const [Password , setPassword]=useState("")

    function HandleSubmit(){
        navigationhook.navigate("Profile",{
            UserName:Name,
            UserEmail:Email,
            UserPassword:Password
        })
    }
    // console.log(navigation)
    // function HandleNavigation(ScreenName){
    //     navigation.navigate(ScreenName)
    // }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text>Your Information</Text>
                <TextInput style={styles.input} placeholder="Enter Your Name" value={Name} onChangeText={(text)=>{setName(text)}}/>
                <TextInput style={styles.input} placeholder="Enter Your Email" value={Email} onChangeText={(text)=>{setEmail(text)}}/>
                <TextInput style={styles.input} placeholder="Enter Your Password" value={Password} onChangeText={(text)=>{setPassword(text)}}
                secureTextEntry={true}/>

                <TouchableOpacity style={styles.SubmitBtn} onPress={()=>{HandleSubmit()}}>
                    <Text style={{ alignItems: 'center'}}> Submit</Text>
                </TouchableOpacity>
            </View>
            {/* <View >
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
            </View> */}
        </View>
    );
}
const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
 input:{
     width:width -20,
     borderWidth :2,
     marginTop:20,
     padding:15
 },
 SubmitBtn:{
    width:width -20,
    backgroundColor:"lightblue",
    marginTop:20,
    padding:15,
    borderRadius:30
 }
})

export default HomeScreen