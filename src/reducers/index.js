import { combineReducers } from 'redux';
import usuarioRedecer from './usuarioReducer';


export default combineReducers({
    usuario: usuarioRedecer,
});