import React, {useState , useEffect} from 'react'
import {SafeAreaView , FlatList , StyleSheet , Text} from 'react-native'
import axios from 'axios';
import AgentCard from '../components/AgentCard'

const renderItem = ({ item } , navigation)=>(
    <AgentCard item={item} navigation={navigation} />
)

const Agents = ({navigation}) =>{
    const [persons , setPersons] = useState(null)
    useEffect(() =>{
        axios.get(`https://staging1.zigway.co/api/v1/agents` ,
         {headers: {Authorization : 'Token fdca2ba1ceadbd459bcc970c144da069ad64024b'}})
        .then(res => {
        const persons = res.data;
        setPersons(persons)
      }).catch(error => console.log(error))
    })
     return (
        <SafeAreaView style={styles.container}>
            {persons != null?
            <FlatList 
                data={persons}
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

export default Agents