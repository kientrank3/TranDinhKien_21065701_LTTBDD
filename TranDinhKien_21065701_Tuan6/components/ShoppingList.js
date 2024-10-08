import { Text,TouchableOpacity,Image, StyleSheet,View,FlatList,SafeAreaView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
const data = [
  {
    name:"Ca nấu lẩu, nấu mỳ mini...",
    shop:"Devang",
    image: require('../assets/ca_nau_lau.png')
  },
   {
    name:"1 Kg khô gà bơ tỏi",
    shop:"LTD Food",
    image: require('../assets/ga_bo_toi.png')
  },
   {
    name:"Xe cần cẩu đa năng",
    shop:"Thế giới đồ chơi",
    image: require('../assets/xa_can_cau.png')
  },
   {
    name:"Đồ chơi dạng mô hình",
    shop:"Thế giới đồ chơi",
    image: require('../assets/do_choi_dang_mo_hinh.png')
  },
   {
    name:"Lãnh đạo giản đơn",
    shop:"Minh Long Book",
    image: require('../assets/lanh_dao_gian_don.png')
  }, {
    name:"Hiểu lòng con trẻ",
    shop:"Minh Long Book",
    image: require('../assets/hieu_long_con_tre.png')
  }
  , {
    name:"Donal Trump thiên tài lãnh đạo",
    shop:"Minh Long Book",
    image: require('../assets/trump1.png')
  }
]
const Item = ({item})=>(
  <View style={styles.itemcontainer} >
    <Image source={item.image} style={{height:74,width:74}}/>
    <View style={{marginTop:-10, padding:5,width:150}}>
      <Text style={{fontWeight:400}}>
        {item.name}
      </Text>
      <Text style={{color:'#7d5b5b',paddingTop:10}}>
        Shop: <Text style={{color:'#f31111'}}>{item.shop}</Text>
      </Text>
    </View>
    <TouchableOpacity
      style={styles.itempress}
    >
      <Text style={{color:'#ffffff',fontWeight:500}}>
        Chat
      </Text>
    </TouchableOpacity>
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
        <Text style={{color:'#ffffff',fontWeight:700,fontSize:18}}>
          Chat
        </Text>
        <Image source={require('../assets/bi_cart-check.png')}/>
      </View>
      <View style={{justifyContent:'center',padding:15,alignItems:'center',}}>
        <Text style={{fontSize:12}}>
          Bạn có thắc mắc về sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
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
