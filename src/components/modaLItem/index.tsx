import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
interface Props{
    item:any;
    show:boolean;
    hiddenModalItems:any;
    showModalMaps:any;
}

const ModalListe=({show=false,item=null,hiddenModalItems,showModalMaps}:Props)=>{
    const handlesClose=()=>{        
        hiddenModalItems(false);        
    }
    const handlesShow=()=>{        
        showModalMaps(true);        
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
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        onPress={() =>handlesClose()}
                    >
                        <AntDesign name="closesquare" style={styles.textStyle}/>
                        
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.containerHqInforModal}>
                            <Image style={styles.hqImage} source={{
                                uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            }/>
                            <Text style={styles.textH3} >Title:</Text>
                            <Text style={styles.textH4} >{item.title}</Text>
                            <Text style={styles.textH3} >Description:</Text>
                            <Text style={styles.textH4} >{description(item.description)}</Text>
                            <TouchableOpacity  
                                onPress={() =>handlesShow()}
                                style={styles.buttonModal} 
                            >
                                <Text style={styles.textButton} >Make Your Order</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
 
}
const COLOR_1 ="red";
const COLOR_2 ="#ffffff";
const styles = StyleSheet.create({
    
    centeredView: {
      backgroundColor:"black", 
    },
    modalView: {
      height:hp(100),
      width:wp(100),
      backgroundColor: "white",
      borderRadius: 20,
    },
    textStyle: {
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
    textH4:{
        width:wp(90),
        marginTop:hp(2),
        fontFamily:"Marvel",
        fontSize:20,
        

    },
    textH3:{
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
        
     
    },   textButton:{
        color:COLOR_2,
        fontFamily:"Marvel",
        fontSize:20
    },
})

export default ModalListe;