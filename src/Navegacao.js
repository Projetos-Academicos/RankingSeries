import {createStackNavigator} from 'react-navigation';
import {
  TelaLogin,
  TelaInicial
} from './telas';


export default createStackNavigator ({
  "Inicio": {
    screen: TelaInicial,
    navigationOptions: {
      title: "Ranking Series",
      headerTitleStyle:{
        fontSize: 30,
        color: "#fff",
      },
    }
  },
  "Login" : {
    screen: TelaLogin,
    navigationOptions: {
      title: "Entrar",
    },    
  },
  
},{
  navigationOptions: {   
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#414146",
      borderBottomWidth: 1,     
    },
    headerTitleStyle:{
      fontSize: 30,
      color: "#fff", 
      textAlign: "center",
      flexGrow: 1,     
    },
  }
});