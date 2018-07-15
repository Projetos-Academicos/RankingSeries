import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const SerieCard = ({ serie }) => {
    return (
        <View style={styles.containe}> 
            <View style={styles.card}> 
                <Text>{` ${serie.id} - ${serie.title} `}</Text>
            </View>    
        </View>
    );
}


const styles = StyleSheet.create({
    containe:{
        flex: 1,
    },
    card: {
        flex: 1,
        borderWidth: 1,
    },
});
export default SerieCard;