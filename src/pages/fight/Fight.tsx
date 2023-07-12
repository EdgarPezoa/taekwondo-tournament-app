import {useState} from "react";
import { View, Text, Pressable, TouchableWithoutFeedback } from 'react-native';
import styles from "./Fight.style";
import IFightProps from "./Fight.type";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Fight = ({ route }: IFightProps) => {
    const [countA, setCountA] = useState<number>(0);
    const [countB, setCountB] = useState<number>(0);
    const { contesterA, contesterB } = route.params;

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text}>{contesterA}</Text>
            <Text style={styles.timerText}>00:00:00</Text>
            <Text style={styles.text}>{contesterB}</Text>
        </View>
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{countA}</Text>
            <Text style={styles.scoreText}>{countB}</Text>
        </View>
        <View style={styles.iconContainer}>
            <Pressable onPress={() => setCountA((prevCount)=>{
                if(prevCount <= 0){
                    return 0;
                }
                return prevCount-1;
                }) }
            >
                <Ionicons name="arrow-undo" size={32} color="white" />
            </Pressable>
             <Pressable onPress={() => {console.log(route);} }>
                <MaterialIcons name="compare-arrows" size={40} color="white" />
            </Pressable>
            <Pressable onPress={() => setCountB((prevCount)=>{
                if(prevCount <= 0){
                    return 0;
                }
                return prevCount-1;
                }) }
            >

                <Ionicons name="md-arrow-redo" size={32} color="white" />
            </Pressable>
        </View>
        <View style={styles.contesterContainer}>
            <TouchableWithoutFeedback onPress={()=>setCountA(prevCount=>prevCount+1)}>
                <View style={styles.redContester} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>setCountB(prevCount=>prevCount+1)}>
                <View style={styles.blueContester} />
            </TouchableWithoutFeedback>
        </View>
    </View>
    )
}

export default Fight;
