import React from 'react'
import { TouchableOpacity , Text , StyleSheet } from 'react-native'

const BorrowerList = ({ item , navigation })=>(
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Loan' , {borrower: item.id})}>
        <Text >ID: {item.id}</Text>
        <Text >name_en: {item.name_en}</Text>
        <Text >next loan max amount: {item.next_loan_max_amount}</Text>
        <Text >borrower number: {item.borrower_number}</Text>
        <Text >id number: {item.id_number}</Text>
        <Text >date joined: {item.date_joined}</Text>
        <Text >date of birth: {item.date_of_birth}</Text>
        <Text >gender: {item.gender}</Text>
        <Text >agent: {item.agent}</Text>
        <Text >education level: {item.education_level}</Text>
        <Text >remittances from overseas: {item.remittances_from_overseas}</Text>
        <Text >home address: {item.home_address}</Text>
        <Text >household expenses low: {item.household_expenses_low}</Text>
        <Text >household expenses high: {item.household_expenses_high}</Text>
        <Text >business address: {item.business_address}</Text>
        <Text >business expenses low: {item.business_expenses_low}</Text>
        <Text >business expenses high: {item.business_expenses_high}</Text>
        <Text >comments: {item.comments}</Text>
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
export default BorrowerList