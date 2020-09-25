import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ( {navigation} ) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    console.log(result);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        try {

        } catch(err) {

        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    } else {
        return (
            <View>
                <FlatList
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({item}) => {
                        return <Image style={style.image} source={ { uri: item} }/>
                    }}/>
            </View>
        )   
    }

}

const style = StyleSheet.create({
    image: {
        height: 250,
        width:250
    }
})

export default ResultShowScreen;