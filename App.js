import {createStackNavigator} from 'react-navigation';
import {
  TelaLogin,
  TelaInicial
} from './src/telas';


export default createStackNavigator ({

  "Login" : {
    screen: TelaLogin,
    navigationOptions: {
      title: "Entrar",
    },    
  },
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