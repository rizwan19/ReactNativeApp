import React from 'react';
import {Text,View,StyleSheet,FlatList,Button,Image} from 'react-native';

const Profile = ()=>{
    
    return(
        <View>
            <View style={styles.container}>
            <Image 
                style={styles.profilestyle}
                source={require('./../../assets/profile.jpg')}>
            </Image>
            </View>
            <View>
                <Text style={styles.textStyle}>Name: Rizwanul Haque Khan</Text>
                <Text style={styles.textStyle}>Student ID: 170042078</Text>
                <Text style={styles.textStyle}>Room NO: Non-Res</Text>
                <Text style={styles.textStyle}>Email: rizwanulhaque@iut-dhaka.edu</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 20,
            color: "blue",
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        profilestyle:{
            height:150,
            width:150,
        },
    }
);
export default Profile;