import { Dimensions, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const COLOR_1 ="red";
const COLOR_2 ="#ffffff";
const COLOR_3 ="#1C1C1C";



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR_3,
        alignItems:"center"
    },
    header:{
        width:wp(100),
        height:hp(5),      
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red"
    },
    textHeader:{
        color:COLOR_2,
        fontSize:20,
        fontFamily:"Marvel"
    },
    containerSearch:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:hp(3)

    },
    iconsSearch:{
        fontSize:25,
        color:COLOR_1,
        left:wp(2),
        position:"absolute"

    },
    seachBox:{
        color:COLOR_1,
        height:40,
        width:wp(90),
        borderWidth:1,
        borderColor:COLOR_1,
        borderRadius:10,
        paddingLeft:wp(10),
        fontSize:18,
        fontFamily:"Marvel"

    },
    footer:{
        height:hp(5),
        width:wp(100),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLOR_1,
    },
    textH3:{
        color:COLOR_2,
        fontFamily:"Marvel",
        fontSize:20        
    }

})


export default styles;