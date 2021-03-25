import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
interface Props{
    item:any;
    modalProps:any;
   
}

const Items = ({item,modalProps}:Props)=>{  
        const name=(params:boolean) =>{
            modalProps({show:true,selectedItems:params})
        } 
        const description = (description:string)=>{
            if(description === null)return "This comic not have Discription!";
            return (String(description).substr(0,100));
        } 
        return(
            <View style={styles.listContainer}>                       
                <Image style={styles.hqThumbnail} source={{
                    uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}
                }/>
                <View style={styles.hqInformationsAndOptions}>         
                    <View style={styles.containerInformation}>
                        <Text style={styles.title}>{item.title.substr(0,10)}...</Text>                
                        <Text style={styles.description}>{description(item.description)}...</Text>                
                    </View>
                    <TouchableOpacity                                     
                        onPress={()=>name(item)}
                        style={styles.buttonListContaine} 
                        activeOpacity={0.7}    
                    >                
                        <Text style={styles.textButton}> 
                            Show Details
                        </Text>                
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

export default Items;
const COLOR_1 ="red";
const COLOR_2 ="#ffffff";
const COLOR_3 ="#1C1C1C";
const styles = StyleSheet.create({

     listContainer:{
        marginTop:hp(2),
        backgroundColor:COLOR_2,
        width:wp(90),
        height:hp(30),
        flexDirection:"row",   
        padding:10,
        borderRadius:10     

    },
    hqThumbnail:{
        width:wp(32),
        height:hp(28),

    },
    hqInformationsAndOptions:{
        marginLeft:wp(1),
        marginRight:wp(1),
        width:wp(50)
    },
    title:{
        fontFamily:"Marvel",
        fontSize:20

    },
    description:{
        fontFamily:"Marvel",
        fontSize:15,
        marginTop:hp(1)

    },
    buttonListContaine:{
        height:40,   
        backgroundColor:COLOR_1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:hp(2),
        position:"relative"
        
     
    },
    containerInformation:{
       height:hp(20)
    },
    textButton:{
        color:COLOR_2,
        fontFamily:"Marvel",
        fontSize:20
    },
})