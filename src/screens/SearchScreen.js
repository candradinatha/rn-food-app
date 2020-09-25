import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResult from '../hooks/useReult';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState(['']);
    const [searchApi, results, errorMessage] = useResult();

    const filterResultByPrice = (price) => {
        // price === '$' || '$$' | '$$$'
        return results.filter( result => {
            return result.price === price;
        });
    };

    return (
        <>
            <View style={style.searchBar}>
                <SearchBar 
                    term={term} 
                    onTermChange={setTerm}
                    onTermSubmit={() => searchApi(term)}/>
            </View>
            <ScrollView>
                { errorMessage ? <Text>{errorMessage}</Text> : null }
                <ResultsList 
                    results={filterResultByPrice('$')} 
                    title="Cost Effective"
                    />
                <ResultsList 
                    results={filterResultByPrice('$$')} 
                    title="Big Pricer"/>
                <ResultsList 
                    results={filterResultByPrice('$$$')} 
                    title="Big Spender"/>
            </ScrollView>
        </>
    )
};

const style = StyleSheet.create({
    background : {
        backgroundColor: "#FFF",
        flex: 1
    },
    result: {
        marginHorizontal: 16
    },
    searchBar : {
        padding: 16
    }
});

export default SearchScreen;