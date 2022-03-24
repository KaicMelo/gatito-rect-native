
import { TouchableOpacity, Text } from 'react-native';

import functionStylesDefault from './styles';

export default function Button({ small = false, inverted = false, value, action, style}) {
    const stylesDefault = functionStylesDefault(small, inverted);

    return <TouchableOpacity onPress={action} style={[stylesDefault.button, style]}>
        <Text style={stylesDefault.value}> {value} </Text>
    </TouchableOpacity>
}