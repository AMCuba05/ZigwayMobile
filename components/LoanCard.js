import React from 'react'
import { TouchableOpacity ,View, Text , StyleSheet } from 'react-native'

const LoanCard = ({ item })=>(
    <TouchableOpacity style={styles.card} >
        <Text >ID: {item.id}</Text>
        <Text >borrower: {item.borrower}</Text>
        <Text >guarantor: {item.guarantor}</Text>
        <Text>Lines:</Text>
        {item.lines.map(line => (
                <View style={styles.card}>
                    <Text>id: {line.id}</Text>
                    <Text>date: {line.date}</Text>
                    <Text>principal: {line.principal}</Text>
                    <Text>fee: {line.fee}</Text>
                    <Text>interest: {line.interest}</Text>
                    <Text >penalty: {line.penalty}</Text>
                </View>
            ))}
        <Text>Repayments:</Text>
        {item.repayments.map(repayment => (
                <View style={styles.card}>
                    <Text>:id {repayment.id}</Text>
                    <Text>date: {repayment.date}</Text>
                    <Text>amount: {repayment.amount}</Text>
                    <Text>recorded at: {repayment.recorded_at}</Text>
                    <Text>loan: {repayment.loan}</Text>
                    <Text >recorded by: {repayment.recorded_by}</Text>
                    <Text>reason for delay: {repayment.reason_for_delay}</Text>
                    <Text>reconciliation status: {repayment.reconciliation_status}</Text>
                </View>
            ))}
        <Text >loan contract photo: {item.loan_contract_photo}</Text>
        <Text >contract number: {item.contract_number}</Text>
        <Text >contract date: {item.contract_date}</Text>
        <Text >uploaded_at: {item.uploaded_at}</Text>
        <Text >state: {item.state}</Text>
        <Text >loan amount: {item.loan_amount}</Text>
        <Text >loan interest type: {item.loan_interest_type}</Text>
        <Text >loan interest_duration: {item.loan_interest_duration}</Text>
        <Text >loan interest rate: {item.loan_interest_rate}</Text>
        <Text >loan fee: {item.loan_fee}</Text>
        <Text >late penalty fee: {item.late_penalty_fee}</Text>
        <Text >late penalty per days: {item.late_penalty_per_x_days}</Text>
        <Text >late penalty max days: {item.late_penalty_max_days}</Text>
        <Text >prepayment penalty: {item.prepayment_penalty}</Text>
        <Text >number of repayments: {item.number_of_repayments}</Text>
        <Text >normal repayment amount: {item.normal_repayment_amount}</Text>
        <Text >bullet repayment amount: {item.bullet_repayment_amount}</Text>
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
export default LoanCard