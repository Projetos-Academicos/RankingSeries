import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ActivityIndicator,
    Alert, 
} from 'react-native';
import {LinhaFormulario} from './../componentes';
import firebase from 'firebase';


export default class TelaLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "", //email de login
            senha: "", //senha de login
            carregando: false, //Loading
            mensagemErro: "", //mensagem de sucesso/erro no login
        }
    }

    //monta o componente quando a classe é renderizada
    //configurando e inicializando a api do firebase 
    componentDidMount(){
        const config = {
            apiKey: "AIzaSyBFmq4HGph7FaHtfqgCbRN36iLoKlfRJUo",
            authDomain: "rankingseries.firebaseapp.com",
            databaseURL: "https://rankingseries.firebaseio.com",
            projectId: "rankingseries",
            storageBucket: "rankingseries.appspot.com",
            messagingSenderId: "259084033864"
        };
        firebase.initializeApp(config);        
    }

    //metodo pra controlar e fazer a mudança do que tá sendo passado nos inputs
    alterarTextoInput(chave, valor){
        this.setState({
            [chave]: valor
        });      
    } 

    //metodo chamado quando clica no botão login
    fazerLogin(){
        this.setState({carregando: true,  mensagemErro: ""});
        const {email, senha} = this.state;        
       
        // const sucessoAoLogar = usuario => {
        //     this.setState({ mensagemErro: "Sucesso!"})}

        firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then(usuario =>{
                Alert.alert("Bem-Vindo!", "Login efetuado com sucesso !");
                this.props.navigation.navigate("Inicio");
            })
            .catch(erro => {
                if(erro.code == "auth/user-not-found"){
                    Alert.alert(
                        "Usuário não encontrado",
                        "Deseja criar um novo cadastro?",
                        [{
                            text: "Não",
                            onPress: () => {},
                            style: "cancel" //IOS
                        }, {
                            text: "Sim",
                            onPress: () => {
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email, senha)
                                    .then(/*Passar parametro ao criar uma nova conta*/)
                                    .catch(/*Passar parametro quando der erro ao criar uma nova conta*/)
                            },
                        }],
                        { cancelable: false} //faz com que o modal não se feche clicando em qualquer lugar da tela
                    )
                }else{
                    this.setState({  mensagemErro: this.mensagemErroCode(erro.code)});                            
                    //this.setState({ mensagem: erro.message}); mensagem de erro em inglês    
                }

            })
            .then(() =>  this.setState({carregando: false}));            ;
    }
    
    //mostra o botão de login ou o loading apos o click no botão
    redenrizarBotao() {
        if(this.state.carregando){
            return <ActivityIndicator />;
        }
        return(
            <Button  title="Login" onPress={() => this.fazerLogin()}/>                   
        );
    }
    //mensagens de erro
    mensagemErroCode(erroCode) {      
       switch(erroCode){
            case "auth/wrong-password" :
                return Alert.alert("Erro","Senha Incorreta");
            // case "auth/user-not-found":
            //     return Alert.alert("Erro","Usuário não encontrado");
            default:
                return Alert.alert("Erro desconhecido");
       }

    }

    //mostra a mensagem que vai aparecer ao clicar no login
    redenrizarMensagem(){
        const { mensagemErro} = this.state;
        if(!mensagemErro){
            return null;
        }
        return(
            <View>
                <Text>{mensagemErro}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <LinhaFormulario first>
                    <TextInput 
                        style={styles.input} 
                        placeholder = "exemplo@exemplo.com" 
                        value={this.state.email} 
                        onChangeText={value => this.alterarTextoInput("email", value) }
                    />                    
                </LinhaFormulario>  
                <LinhaFormulario last>
                    <TextInput 
                        style={styles.input} 
                        placeholder = "******"  
                        value={this.state.senha}  
                        onChangeText={value => this.alterarTextoInput("senha", value)}
                        secureTextEntry 
                    />                    
                </LinhaFormulario>  
                <View style={styles.botao}>   
                    {this.redenrizarBotao()}
                    {this.redenrizarMensagem()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container:{          
        paddingLeft: 10,
        paddingRight: 10,
    },
    input:{
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5, 
    },
    botao:{
       marginTop: 5,
    }
});
