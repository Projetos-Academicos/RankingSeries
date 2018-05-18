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
    headerTitleStyle:{
      textAlign: "center",
      flexGrow: 1,
    }
  },
  "Inicio": {
    screen: TelaInicial,
    navigationOptions: {
      title: "Ranking Series"
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
    },
  }
});