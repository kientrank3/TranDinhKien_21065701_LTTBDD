import { Text, View, StyleSheet, Image,Pressable,TextInput } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
        <View style={{flex:2, alignItems:'center', paddingTop:10,justifyContent:'center'}}>
          <Image source={require('../assets/Vector.png')} style={{height:117,width:105}}/>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.headTitle}>FORGET</Text>
          <Text style={styles.headTitle}>PASSWORD</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <Text style={styles.text}>Provide your account's email for which you </Text>
          <Text style={styles.text}>want to reset your password</Text>
        </View>
        <View style={{flex:1, flexDirection:'row',justifyContent:'center'}}>
           <Image source={require('../assets/email.png')} size={20}  style={styles.icon}/>
          <TextInput
            editable
            numberOfLines={1}
            maxLength={40}
            style={{padding: 10,width:257,borderEndWidth:1,borderTopWidth:1,borderBottomWidth:1,height:45, backgroundColor:'#C4C4C4'}}
            value={'Email'}
          />
        </View>
        <View style={{flex:1, flexDirection:'row',justifyContent:'center',width:'100%',paddingBottom:50}}>
          <Pressable style={styles.button}>
            <Text style={{fontSize:20,fontWeight:700}}>NEXT</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    background:'linear-gradient(180deg, rgba(199,244,246,1) 0%, rgba(209,244,246,1) 35%, rgba(0,204,249,1) 100%)'
  },
  button:{
    backgroundColor:'#E3C000',
    height:45,
    width:305,
    alignItems:'center',
    justifyContent:'center'
  },
  headTitle:{
    fontSize:25,
    fontWeight:700
  },
  icon:{
    marginRight:0,
    borderTopWidth:1,
    borderStartWidth:1,
    borderBottomWidth:1
  },
  text:{
    fontSize:15,
    fontWeight:700
  }
});
