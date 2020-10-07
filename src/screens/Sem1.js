import React from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
const Sem1 = ()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>First Semester</Text>
            <Text style={styles.textStyle}>1. CSE 4107</Text>
            <Text style={styles.textStyle}>2. CSE 4104</Text>
            <Text style={styles.textStyle}>3. CSE 4108</Text>
            <Text style={styles.textStyle}>4. SWE 4101</Text>
            <Text style={styles.textStyle}>5. CSE 4104</Text>
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
export default Sem1;