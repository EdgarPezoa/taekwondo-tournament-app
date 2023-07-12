 import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  container:{
    flex:1,
  },
  iconContainer:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:10
  },
  scoreContainer:{
    paddingTop:20,
    width:'100%',
    height:'25%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  contesterContainer:{
    flex:1,
    flexDirection:"row",
    borderWidth:1,
    borderColor:"#fff",
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  redContester:{
    height:'100%',
    width:'50%',
    backgroundColor:"#FA5050",
    borderTopLeftRadius:30
  },
  blueContester:{
    height:'100%',
    width:'50%',
    backgroundColor:"#50A8FA",
    borderTopRightRadius:30
  },

  header:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginTop:10
  },
  text:{
    color:"#fff",
    fontSize:30
  },
  timerText:{
    color:"#fff",
    fontSize:20
  },
  scoreText:{
    color:"#fff",
    fontSize:30,
    fontStyle:"italic",
    fontWeight:"bold",
  }
});

export default styles;
