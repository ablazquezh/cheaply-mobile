import * as React from 'react';
import { Appbar, TextInput } from 'react-native-paper';

const MainTextField = () => {

    const [text, setText] = React.useState("")

    return(
        <TextInput label="Escribe aquí tu lista de la compra"
        value={text}
        onChangeText={text => setText(text)}
        multiline={true}
        style={{height: "50%"}} />
    )
};

export default MainTextField;