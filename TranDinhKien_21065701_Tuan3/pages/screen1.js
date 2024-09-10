import { Text, View, StyleSheet, Image,Pressable } from 'react-native';


export default function Screen1() {
  return (
    <View style={styles.container}>
        <View style={{flex:2, alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/Ellipse8.png')} style={{height:140,width:140}}/>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.headTitle}>GROW</Text>
          <Text style={styles.headTitle}>YOUR BUSINESS</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <Text style={styles.text}>We will help you to grow your business using</Text>
          <Text style={styles.text}>online server</Text>
        </View>
        <View style={{flex:1, flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Pressable style={styles.button}>
            <Text style={{fontSize:20,fontWeight:700}}>LOGIN</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{fontSize:20,fontWeight:700}}>SIGN UP</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00CCF9',
    padding: 8,
  },
  button:{
    backgroundColor:'#E3C000',
    height:48,
    width:119,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  headTitle:{
    fontSize:25,
    fontWeight:700
  },
  text:{
    fontSize:15,
    fontWeight:700
  }
});
