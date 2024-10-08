import { Text,TouchableOpacity,Image, StyleSheet,View,FlatList,TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
const data = [
  {
    name:"Cáp chuyển từ cổng USB sang SP2...",
    image: require('../assets/dauchuyendoi1.png')
  },{
    name:"Cáp chuyển từ cổng USB sang SP2...",
    image: require('../assets/carbusbtops21.png')
  },{
    name:"Cáp chuyển từ cổng USB sang SP2...",
    image: require('../assets/giacchuyen1.png')
  },{
    name:"Cáp chuyển từ cổng USB sang SP2...",
    image: require('../assets/dauchuyendoipsps2.png')
  },{
    name:"Cáp chuyển từ cổng USB sang SP2...",
    image: require('../assets/daynguon1.png')
  },{
    name:"Cáp chuyển từ cổng USB sang SP2...",
    image: require('../assets/daucam1.png')
  },
]
const Item = ({item})=>(
  <View style={styles.itemcontainer} >
    <Image source={item.image} style={{height:90,width:155}}/>
    <View style={{}}>
      <Text style={{fontWeight:400}}>
        {item.name}
      </Text>
      <Text style={{fontSize:10}}>
        <Image source={require('../assets/star.png')}/>
        <Image source={require('../assets/star.png')}/>
        <Image source={require('../assets/star.png')}/>
        <Image source={require('../assets/star.png')}/>
        <Image source={require('../assets/starnone.png')}/>
        {' '}(15)
      </Text>
      <Text>
        69.9000 đ <Text style={{color:'#c4c4c4',fontSize:12}}>-39%</Text>
      </Text>
    </View>
  </View>
);
export default function App() {
  const renderItem=({item})=>{
    return(
      <Item item={item}/>
    );
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Vector.png')}/>
        <View style={{flexDirection:'row',backgroundColor:'#ffffff',width:192,justifyContent:'center',padding:2}}>
          <Image source={require('../assets/whh_magnifier.png')} style={{backgroundColor:'#ffffff',height:25,width:25}}/>
          <TextInput 
          style={{backgroundColor:'#ffffff',paddingLeft:10,color:'#7d5b5b',fontWeight:400,fontSize:13}}
          placeholder={'Dây cáp USB'}
          />
        </View>
        <Image source={require('../assets/bi_cart-check.png')}/>
        <Text style={{fontSize:30,fontWeight:700,color:'#ffffff',marginBottom:15}}>...</Text>
      </View>
      <View style={styles.contentcontainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  header:{
    backgroundColor:"#1BA9FF",
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
    padding:10
  },
  itemcontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
    borderTopWidth:1,
    borderColor:'#c4c4c4'
  },
  contentcontainer:{
    height:'80%'
  },
  itempress:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f31111',width:88,height:38,

  }

});
