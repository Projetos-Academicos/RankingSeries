import React from 'react';
import {Text, View, FlatList } from 'react-native';
import series from '../../series.json';
import SerieCard from '../componentes/SerieCard';

const TelaInicial = props =>(
    <View>
        <FlatList 
            data={series}
            renderItem={({ item }) => (
                <SerieCard serie={item}/>
            )}
            keyExtractor = {item => item.id.toString()} // essa keyExtractor espera uma key do tipo String
            numColumns={2}   
        />
    </View>
);


export default TelaInicial;