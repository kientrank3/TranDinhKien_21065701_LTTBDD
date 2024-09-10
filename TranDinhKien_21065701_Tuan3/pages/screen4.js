import { Text, View, StyleSheet, Image,Pressable,TextInput } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
        <View style={{flex:2, alignItems:'center',justifyContent:'center', paddingTop:10}}>
          <Text style={{fontSize:70,fontWeight:800}}>CODE</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={styles.headTitle}>VERIFICATION</Text>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
          <Text style={styles.text}>Enter onetime password sent on </Text>
          <Text style={styles.text}>++849092605798</Text>
        </View>
        <View style={{flex:1, flexDirection:'row',justifyContent:'center'}}>
          <TextInput
            editable={false}
            numberOfLines={1}
            maxLength={40}
            style={styles.inputText}
          />
          <TextInput
          editable={false}
            numberOfLines={1}
            maxLength={40}
            style={styles.inputText}
          />
          <TextInput
          editable={false}
            numberOfLines={1}
            maxLength={40}
            style={styles.inputText}
          />
          <TextInput
          editable={false}
            numberOfLines={1}
            maxLength={40}
            style={styles.inputText}
          />
          <TextInput
          editable={false}
            numberOfLines={1}
            maxLength={40}
            style={styles.inputText}
          />
          <TextInput
          editable={false}
            numberOfLines={1}
            maxLength={40}
            style={styles.inputText}
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
    fontSize:23,
    fontWeight:700
  },
  inputText:{
    width:50,
    height:50,
    borderWidth:1
  },
  text:{
    fontSize:15,
    fontWeight:700
  }
});
