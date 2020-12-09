import React from 'react'
import { TouchableOpacity , Text , StyleSheet } from 'react-native'

const AgentCard = ({ item , navigation})=>(
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BorrowersInformation' , {agent: item.id})}>
        <Text >ID: {item.id}</Text>
        <Text >user: {item.user}</Text>
        <Text >name: {item.name}</Text>
        <Text >last transfer: {item.last_money_transfer}</Text>
        <Text >phone number: {item.phone_number}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    card: {
        padding:10 , borderColor: 'black' , borderWidth: 1,marginVertical: 5, borderRadius: 5 , flex: 1
    },
    content: {
        fontSize: 20
    }
})

export default AgentCard