import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, FlatList} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DrinkCard = () => {

    const ingredients = [
        { id: '1', title: 'Vodka 40ml' },
        { id: '2', title: 'Orange Juice 250 ml' },
        { id: '3', title: 'Item 3' },
    ];

    return (
        <View style={styles.container}>
            <Image source={require('../assets/cocktail.png')} style={styles.image}/>
            <Text style={styles.boldText}>Name of Drink:)</Text>
            <Text style={styles.boldText}>Description)</Text>
            <FlatList
                data={ingredients}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    image: {
        width: 100,
        height: 100,
    },
    container: {
        height: screenHeight * 0.5,
        width: screenWidth * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DrinkCard;
