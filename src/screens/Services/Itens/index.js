
import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from './styles';
import EntireField from '../../../components/Entire-field';
import Button from '../../../components/Button';

export default function Itens({ name, price, description }) {

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(price);
    const [expand, setExpand] = useState(false);

    const updateQuantityTotal = (newQuantity) => {
        setQuantity(newQuantity);
        calcTotal(newQuantity);
    }

    const calcTotal = (quantity) => {
        setTotal(quantity * price);
    }

    const invertExpand = () => {
        setExpand(!expand);
        updateQuantityTotal(1);
    }

    return <>
        <TouchableOpacity style={styles.information} onPress={invertExpand} >
            <Text style={styles.name}> {name} </Text>
            <Text style={styles.description}> {description} </Text>
            <Text style={styles.price}>  
               {
                Intl.NumberFormat('pt-BR', {
                    style:'currency',currency:'BRL'
                }).format(price) 
               }
            </Text>
        </TouchableOpacity>
        {expand && 
            <View style={styles.cart}>
                <View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Quantidade:</Text>
                        <EntireField receivedValue={quantity} action={updateQuantityTotal} style={styles.quantity} />
                    </View>
                    <View style={styles.value}>
                        <Text style={styles.description}>Total:</Text>
                        <Text style={styles.price}>               {
                    Intl.NumberFormat('pt-BR', {
                        style:'currency',currency:'BRL'
                    }).format(total) 
                }</Text>
                    </View>
                </View>
                <Button value='Adicionar ao carrinho' action={ () => {}}/>
            </View>
        }
        <View style={styles.divider}>

        </View>
    </>
}