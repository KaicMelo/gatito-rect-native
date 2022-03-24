
import { TextInput } from 'react-native';

import stylesDefault from './styles';

export default function EntireField({receivedValue, action, style}){
    const updateValue = (newValue,callbackAction) => {
        const integerVerify = newValue.match(/^[0-9]*$/);
        if (!integerVerify) return;

        const removeLeftZero = newValue.replace(/^(0)(.+)/,'$2');

        callbackAction(removeLeftZero)
    };

    const numberString = String(receivedValue);

    return <TextInput
    style={[stylesDefault.field,style]}
    keyboardType='number-pad'
    selectTextOnFocus
    onChangeText={ (newValue) => updateValue(newValue, action)}
    value={numberString}
    />
}