import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navegacao from './Navegacao';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import combinacaoReducers from './reducers/index';
import {composeWithDevTools} from 'remote-redux-devtools';
import reduxThunk from 'redux-thunk';

const store = createStore(combinacaoReducers, composeWithDevTools(applyMiddleware(reduxThunk)));



const RankingSeries = props => (
  <Provider store={store}>
      <Navegacao />
  </ Provider>
);


const styles = StyleSheet.create({

});
export default RankingSeries;