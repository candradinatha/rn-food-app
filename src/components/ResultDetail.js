import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View style={style.container}>
            <Image style={style.imageStyle} source={ { uri: result.image_url} }></Image>
            <Text style={style.title}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        margin: 8
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius:5
    },
    title: {
        marginTop: 8,
        fontWeight: 'bold'
    }
})

export default ResultDetail;