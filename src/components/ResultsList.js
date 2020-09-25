import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail'


const ResultsList = ( { title, results, navigation } ) => {
    if(!results.length) {
        return null;
    }
    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                style={style.listStyle}
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                            <ResultDetail 
                                result={item}/>
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}/>
        </View>
    )
}
const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 8
    },
    listStyle: {
        paddingHorizontal:8
    }

})
export default withNavigation(ResultsList);