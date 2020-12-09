import React, {useState , useEffect} from 'react'
import {SafeAreaView , FlatList , StyleSheet , Text} from 'react-native'
import axios from 'axios';
import LoanCard from '../components/LoanCard'

const renderItem = ({ item } , navigation)=>(
    <LoanCard item={item} navigation={navigation} />
)

const filter = (loans , filter)=>{
    let response = []
    loans.forEach(function(element, index, ) {
        if (element.borrower === filter) {
            response.push(element)
        }
    })
    return response
}

const Loan = ({route , navigation}) =>{
    const { borrower } = route.params;
    const [loans , setLoans] = useState(null)
    useEffect(() =>{
        axios.get(`https://staging1.zigway.co/api/v1/loans/` ,
         {headers: {Authorization : 'Token fdca2ba1ceadbd459bcc970c144da069ad64024b'}})
        .then(res => {
        const loans = res.data;
        setLoans(loans)
      }).catch(error => console.log(error))
    })
     return (
        <SafeAreaView style={styles.container}>
            {loans != null?
                <FlatList 
                    data={ filter(loans , borrower) }
                    renderItem={item => renderItem(item , navigation)}
                    keyExtractor={item => Number(item.id)}
                />: 
                <Text>Loading</Text>
            }
        </SafeAreaView>
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1 , backgroundColor: '#FAFAFA' , paddingHorizontal: 30 , paddingVertical: 10
     }
 })

export default Loan