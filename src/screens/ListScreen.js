import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const ListScreen = ()=>{
    const uni=[{name:"BUET"},{name:"IUT"},{name:"KUET"},{name:"CUET"},{name:"RUET"},{name:"SUST"}];
    return(
        <View style={styles.viewStyle}>
            <FlatList>
                data = {uni}
                renderItem={function({ item }){
                    return<Text style={styles.textStyle}>{item.name}</Text>;
                }}
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 30,
            color: "blue",
            marginVertical:30,
        },
        viewStyle:{
            backgroundColor:'cyan',
            borderColor:'red',
            borderWidth:5,
        }
    }
);
export default ListScreen;