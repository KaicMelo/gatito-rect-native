
import { Text, View } from 'react-native';
import { useState } from 'react';

import styles from './styles';
import EntireField from '../../../components/Entire-field';
import Button from '../../../components/Button';

export default function Itens({ name, price, description }) {

    const [quantity, setQuantity] = useState(1);
    return <>
        <View style={styles.information}>
            <Text style={styles.name}> {name} </Text>
            <Text style={styles.description}> {description} </Text>
            <Text style={styles.price}> 
                {price}
            </Text>
        </View>
        <View style={styles.cart}>
            <View>
                <View style={styles.value}>
                    <Text style={styles.description}>Quantidade:</Text>
                    <EntireField receivedValue={quantity} action={setQuantity} style={styles.quantity} />
                </View>
                <View style={styles.value}>
                    <Text style={styles.description}>Preço:</Text>
                    <Text style={styles.price}>0</Text>
                </View>
            </View>
            <Button value='Adicionar' action={ () => {}}/>
        </View>
        <View style={styles.divider}>

        </View>
    </>
}