import {createStackNavigator} from 'react-navigation';
import {TelaLogin} from './src/telas';


export default createStackNavigator ({

  "Login" :{
    screen: TelaLogin,
    navigationOptions: {
      title: "Entrar",
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