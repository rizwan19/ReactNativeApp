import React from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
const Sem2 = ()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Second Semester</Text>
            <Text style={styles.textStyle}>1. CSE 4203</Text>
            <Text style={styles.textStyle}>2. CSE 4205</Text>
            <Text style={styles.textStyle}>3. CSE 4206</Text>
            <Text style={styles.textStyle}>4. SWE 4201</Text>
            <Text style={styles.textStyle}>5. Math 4241</Text>
        </View>
    );
};
const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: "blue",
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
);
export default Sem2;