import React, {useState , useEffect} from 'react'
import {SafeAreaView , FlatList , StyleSheet , Text} from 'react-native'
import axios from 'axios';
import BorrowerList from '../components/BorrowerList'

const renderItem = ({ item } , navigation)=>(
    <BorrowerList item={item} navigation={navigation} />
)

const BorrowersInformation = ({route , navigation}) =>{
    const { agent } = route.params;
    const [borrowers , setBorrowers] = useState(null)
    useEffect(() =>{
        axios.get(`https://staging1.zigway.co/api/v1/borrowers/` ,
         {headers: {Authorization : 'Token fdca2ba1ceadbd459bcc970c144da069ad64024b'}})
        .then(res => {
        const borrowers = res.data;
        setBorrowers(borrowers)
      }).catch(error => console.log(error))
    })
     return (
        <SafeAreaView style={styles.container}>
            {borrowers != null?
                <FlatList 
                    data={borrowers}
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

export default BorrowersInformation