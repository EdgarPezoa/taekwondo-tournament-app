import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  title: {
    fontSize:25,
    color:"#fff",
    marginBottom:10
  },
  dropdownContainer:{ 
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    width:'100%',
  },
  dropdown: {
      width:'30%',
      color:"#fff",
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginHorizontal:5,
  },
  pressable: {
    marginTop:10,
    paddingVertical: 5,
    paddingHorizontal:10,
    borderRadius:5,
    backgroundColor:"#FAA250"
  },
  text:{
    color:"#fff"
  }
});

export default styles;
