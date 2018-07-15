import firebase from 'firebase';
import { Alert } from 'react-native';

export const USUARIO_LOGIN_SUCESSO = "USUARIO_LOGIN_SUCESSO";
const loginUsuario = usuario => ({
    type: USUARIO_LOGIN_SUCESSO,
    usuario
});

export const LOGOUT_USUARIO = "LOGOUT_USUARIO";
const logoutUsuario = () => ({
    type: LOGOUT_USUARIO,
});

export const login = ({ email, senha }) => dispatch => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(usuario => {
            const action = loginUsuario(usuario);
            dispatch(action);
            return usuario;
        })
        .catch(erro => {
            if (erro.code == "auth/user-not-found") {
                return new Promise((resolve, reject) => {
                    Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um novo cadastro?",
                        [{
                            text: "Não",
                            onPress: () => resolve(),
                            style: "cancel" //IOS
                        }, {
                            text: "Sim",
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, senha)
                                    .then(resolve)
                                    .catch(reject)
                            },
                        }],
                        { cancelable: false } //faz com que o modal não se feche clicando em qualquer lugar da tela
                    )
                })

            }
            return Promise.reject(erro);

        })
}