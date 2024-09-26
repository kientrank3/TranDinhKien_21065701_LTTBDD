import { Text, Pressable, StyleSheet ,View,TouchableOpacity,TextInput} from 'react-native';
import React, { useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
export default function Count() {
  const [count,setCount] = useState(0)
  const [array,setArray] = useState([5,6,7])
  const increment = () => {
    setArray(array => 
      array.map((count) => count+1)
    );
  };

  return(
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Pressable
          style={{width:200,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#E53935',borderRadius:8}}
          onPress={()=>{
            setCount(count+1)
          }}
        >
          <Text style={{color:'#ffff',fontSize:20,fontWeight:700}}>Count</Text>
        </Pressable>
        <Text style={{fontSize:60,fontWeight:700,padding:10}}>{count}</Text>
        <Pressable
          style={{width:200,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#0A5EB7',borderRadius:8}}
          onPress={()=>{
            setCount(0)
            setArray([5,6,7])
          }}
        >
          <Text style={{color:'#ffff',fontSize:20,fontWeight:700}}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.subcontainer}>
        <Pressable
          style={{width:200,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#E53935',borderRadius:8}}
          onPress={increment}
        >
           <Text style={{color:'#ffff',fontSize:20,fontWeight:700}}>Count array up !</Text>
        </Pressable>
        <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',padding:20}}> 
          {array.map((value)=>{
            return <Text style={styles.text}>{value}</Text>
          })}
        </View>
        
      </View>
      
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
    padding:10,
    width:'100%',
    height:'80%'
  },
  subcontainer:{alignItems:'center'},
  text:{
    fontWeight:700,
    fontSize:30
  }
}
)