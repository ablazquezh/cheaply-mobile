import * as React from 'react';
import { Appbar, TextInput } from 'react-native-paper';

const MainTextField = () => {

    const [text, setText] = React.useState("")

    return(
        <TextInput label="Escribe aquí"
        value={text}
        onChangeText={text => setText(text)}
        multiline={true}
        style={{height: "100%", width: "100%"}} />
    )
};

export default MainTextField;