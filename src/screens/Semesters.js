import React from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';

const Semesters = (props)=>{
    
    return(
        <View>
            
            <Button title="1st" onPress={
                function(){
                    props.navigation.navigate("Sem1");
                }
            }></Button>
            <Button title="2nd" onPress={
                function(){
                    props.navigation.navigate("Sem2");
                }
            }></Button>
            <Button title="3rd" onPress={
                function(){
                    props.navigation.navigate("Sem3");
                }
            }></Button>
        </View>
        
    );
};
export default Semesters;