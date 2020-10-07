import React from 'react';
import {Text,StyleSheet,View, Button,Image,TouchableOpacity} from 'react-native';

const HomeScreen = (props)=>{
    console.log(props);
    return (<View style={styles.container}>
        <Image 
            style={styles.iutlogo}
            source={require('./../../assets/iut.png')}>
        </Image>
        <Text style={styles.textStyle}>Department of CSE</Text>
        <Text style={styles.textStyle}>Program: SWE</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={
                function(){
                    props.navigation.navigate("Profile");
                }
            }
        >
            <Text>My Profile</Text>
        </TouchableOpacity>
        <Button title="Semesters" style={styles.button} onPress={
            function(){
                props.navigation.navigate("Semesters");
            }
        }></Button>
        <Button style={styles.button} title="Faculty List" onPress={
            function(){
                props.navigation.navigate("Faculty");
            }
        }></Button>
    </View>
        );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: "blue",
        },
        iutlogo:{
            width: 80,
            height: 100,
            resizeMode: 'stretch',
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 20,
            justifyContent: 'space-between',
            marginTop: 20,
        },
    }
);
export default HomeScreen;