import * as React from 'react';
import { View, Text} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TopBar = () => {
 
  const insets = useSafeAreaInsets();

  return(
    
    <Appbar style={{backgroundColor: "pink", elevation: 4, paddingTop: 20}}>

      <Appbar.Content title={"Hola!"} style={{paddingLeft: "5%"}}
        titleStyle={{fontWeight: "bold", fontSize: 25}} />
     
      <Appbar.Action icon="bell" style={{backgroundColor: "rgba(220, 220, 220, 0.4)"}}  
        onPress={() => {}} />
      <Appbar.Action icon="account" style={{backgroundColor: "rgba(220, 220, 220, 0.4)"}}
        onPress={() => {}} />
      
    </Appbar>
    )
};

export default TopBar;