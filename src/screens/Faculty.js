import React from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';

const Faculty = ()=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>1.Mr Tasnim Ahmed</Text>
            <Text style={styles.textStyle}>2.Mr Mohayeminul Islam</Text>
            <Text style={styles.textStyle}>3.Mr Ashraful Alam Khan</Text>
            <Text style={styles.textStyle}>4.Mr Sohel Ahmed</Text>
            <Text style={styles.textStyle}>5.Ms Lutfun Nahar Lota</Text>
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
export default Faculty;