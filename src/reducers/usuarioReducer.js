import { USUARIO_LOGIN_SUCESSO, LOGOUT_USUARIO} from '../actions';

export default function usuarioReducer(state = null, action){
    switch (action.type) {
        case USUARIO_LOGIN_SUCESSO:
            return action.usuario;
        case LOGOUT_USUARIO:
            return null;  
        default:
            return state;
    }
}