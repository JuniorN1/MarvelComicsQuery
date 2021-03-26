import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
interface Comic{  
    description:string;
    title:string;
    thumbnail:{
        extension:string;
        path:string;
    }        
}
interface Props{
    item?:Comic|null;
    show:boolean;
    hiddenModalItems:any;
}
const ModalListe=({show=false,item=null,hiddenModalItems}:Props)=>{
    const handlesClose=()=>{        
        hiddenModalItems(false);        
    }
    const description = (description:string)=>{
        if(description === null)return "This comic not have Discription!";
        return (String(description).substr(0,100));
    } 
    if(item===null)return <View></View>;
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
        >
            <View style={styleModalList.centeredView}>
                <View style={styleModalList.modalView}>
                    <TouchableOpacity
                        onPress={() =>handlesClose()}
                    >
                        <AntDesign name="closesquare" style={styleModalList.iconConfig}/>                        
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styleModalList.containerHqInforModal}>
                            <Image style={styleModalList.hqImage} source={{
                                uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            }/>
                            <Text style={styleModalList.textTitle} >Titulo:</Text>
                            <Text style={styleModalList.textDiscription} >{item.title}</Text>
                            <Text style={styleModalList.textTitle} >Descrição:</Text>
                            <Text style={styleModalList.textDiscription} >{description(item.description)}</Text>                         
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
 
}
const COLOR_1 ="red";
const COLOR_2 ="#ffffff";
const styleModalList = StyleSheet.create({    
    centeredView: {
      backgroundColor:"black", 
    },
    modalView: {
      height:hp(100),
      width:wp(100),
      backgroundColor: "white",
      borderRadius: 20,
    },
    iconConfig: {
      color: "red", 
      fontSize:25,
      padding:10
    },
    hqImage:{
        width:wp(70),
        height:hp(61)
    },
    containerHqInforModal:{
        width:wp(100),
        alignItems:"center"
    },
    titleModal:{
        fontFamily:"Marvel",
        fontSize:30,
        marginBottom:10,
        marginTop:10
    },
    textDiscription:{
        width:wp(90),
        marginTop:hp(2),
        fontFamily:"Marvel",
        fontSize:20,
    },
    textTitle:{
        width:wp(90),
        marginTop:hp(2),
        fontFamily:"Marvel",
        fontSize:30,
    },
    buttonModal:{
        height:40,
        width:wp(50)   ,
        marginTop:hp(2),
        backgroundColor:COLOR_1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:hp(2),
        position:"relative"     
    },  
    textButton:{
        color:COLOR_2,
        fontFamily:"Marvel",
        fontSize:20
    },
})

export default ModalListe;