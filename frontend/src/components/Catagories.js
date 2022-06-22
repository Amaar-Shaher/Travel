import { FlatList,View} from 'react-native';
import Categoryitem from './Categoryitem';
import { data } from "../common/Data";


export default function Catagories( {catagories , setTerm , term} ) {
  return (
      <View>
    <FlatList 
      data={catagories}
      renderItem={({item, index}) => {
      return (
        <Categoryitem 
            name={item.name}
            value={item.value}
            index={index}
          
            active={item.name === term}            
            handlePress={() => setTerm(item.name)
            
            }
            
        />
      );
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(category) => category.name}
  />
  </View>
  )
}
