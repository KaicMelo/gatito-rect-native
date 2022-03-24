
import { Text, SafeAreaView, StatusBar, FlatList } from 'react-native';

import Itens from './Itens';

const services = [
    {
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'Não de banho no seu gato'
    },
    {
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4'
    },
    {
        id: 3,
        name: 'Tosa',
        price: 65.9,
        description: 'Vacina Antirrábicao. Seu gato precisa de uma por ano.'
    },
    {
        id: 4,
        name: 'Cirurgia',
        price: 99.9,
        description: 'Todas a cirurgia será com o doutor Kaic Melo'
    },
]

export default function Services() {
    return <SafeAreaView>
        <StatusBar />
        <FlatList
            data={services} 
            renderItem={({item}) => <Itens {...item} />}
            keyExtractor={ ({id}) => String(id)} />
    </SafeAreaView>
}