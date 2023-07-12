import { View, Text, Pressable } from 'react-native';
import {useState} from 'react';
import styles from './Home.style';
import { Dropdown } from 'react-native-element-dropdown';
import ScreenProps from '../../navigation/Navigation.type';

const Home = ({ navigation }:ScreenProps) => {
  const [contesterA, setContesterA] = useState("");
  const [contesterB, setContesterB] = useState("");

  const contesters = [
    {
      label: "Eddy", value:"Eddy",
    },
    {
      label: "Carlos", value:"Carlos",
    }
  ];

  const onPressFight = () => {
    if(contesterA !== "" && contesterB !== ""){
      navigation.navigate('Fight', {
        contesterA,
        contesterB,
      });
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>New fight</Text>
        <View style={styles.dropdownContainer}> 
          <Dropdown
            search
            style={styles.dropdown}
            placeholderStyle={styles.text}
            selectedTextStyle={styles.text}
            data={contesters}
            labelField="label"
            valueField="value"
            maxHeight={300}
            placeholder={'Select'}
            searchPlaceholder="Search..."
            value={contesterA}
            onChange={item => {
              setContesterA(item.value);
            }}
         />
          <Text style={styles.text}>VS</Text>
         <Dropdown
            search
            style={styles.dropdown}
            placeholderStyle={styles.text}
            selectedTextStyle={styles.text}
            data={contesters}
            labelField="label"
            valueField="value"
            maxHeight={300}
            placeholder={'Select'}
            searchPlaceholder="Search..."
            value={contesterB}
            onChange={item => {
              setContesterB(item.value);
            }}
         />
        </View>
        <View>
          <Pressable style={styles.pressable} onPress={onPressFight}>
            <Text style={styles.text}>FIGHT!</Text>
          </Pressable>
        </View>
    </View>
  );
}

export default Home;
