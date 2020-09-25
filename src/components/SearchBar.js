
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({term , onTermChange, onTermSubmit}) => {
    return (
        <View style={style.backgroundStyle}>
            <EvilIcons name="search" style={style.searchIconStyle} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={style.textInput} 
                placeholder="Search"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}/>
        </View>
    )
};

const style = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FEFEFE',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row'
    },

    textInput: {
        flex: 1,
        fontSize: 18
    },

    searchIconStyle: {
        fontSize: 24,
        alignSelf: 'center',
        marginHorizontal: 8
    }
});

export default SearchBar;