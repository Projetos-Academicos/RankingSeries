import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {LinhaFormulario} from './../componentes';



export default class TelaLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            senha: "",
        }
    }
    alterarTextoInput(chave, valor){
        this.setState({
            [chave]: valor
        });
        // const newState = {};  /* JEITO MAIS ANTIGO */
        // newState[chave] =  value;
        // this.setState(newState);      
    } 

    fazerLogin(){
        console.log(this.state);        
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
                    <Button  title="Login" onPress={() => this.fazerLogin()}/>                   
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
