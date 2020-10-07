import React from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
const Sem3 = ()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Third Semester</Text>
            <Text style={styles.textStyle}>1. Math 4341</Text>
            <Text style={styles.textStyle}>2. CSE 4303</Text>
            <Text style={styles.textStyle}>3. CSE 4305</Text>
            <Text style={styles.textStyle}>4. CSE 4307</Text>
            <Text style={styles.textStyle}>5. CSE 4309</Text>
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
export default Sem3;