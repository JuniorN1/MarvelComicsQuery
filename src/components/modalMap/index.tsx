import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
interface Props{
    show:boolean;
    hiddenModal:any;
   
}
const ModalMaps=({show=false,hiddenModal}:Props)=>{
    const [position,setPosition] = useState({latitude:0,longitude:0}); 
    const handleSelectMapPosition=(event:MapEvent)=>{     
        setPosition(event.nativeEvent.coordinate);    
    }
    const handleShow=()=>{     
        hiddenModal();    
    }
    const handlesSend = ()=>{
        if(position.latitude===0){
            Alert.alert(
                "Information",
                "Selecione sua localização!"
            )
            return;
        }
        Alert.alert(
            "Success",
            "Enviaremos seleção de quadrinhos para sua localização, obrigado!"
        )
    }
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() =>handleShow()}
                        >
                            <AntDesign name="closesquare" style={styles.textStyle}/>
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Selecione sua localização</Text>
                    </View>
                    <MapView 
                        provider={PROVIDER_GOOGLE}
                        initialRegion={
                            {
                                latitude:-6.1902058,
                                longitude:-38.2231755,
                                latitudeDelta:0.008,
                                longitudeDelta:0.008,
                            }
                        }        
                        onPress={handleSelectMapPosition}
                        style={styles.map}                     
                    >
                        {position.latitude != 0 && (
                            <Marker                         
                            coordinate={
                                { 
                                    latitude:position.latitude, 
                                    longitude: position.longitude 
                                }
                            }
                        />
                        ) }
                    </MapView>  
                    <TouchableOpacity  
                        onPress={()=>handlesSend()}
                        style={styles.buttonModal} 
                    >
                        <Text style={styles.textButton} >Envie-me</Text>
                    </TouchableOpacity>              
                </View>
            </View>
        </Modal>
    )
 
}
const COLOR_1 ="red";
const COLOR_2 ="#ffffff";
const styles = StyleSheet.create({
    textHeader:{
        fontFamily:"Marvel",
        fontSize:20,
        color:COLOR_2,
        marginLeft:wp(10),
        marginRight:wp(10)
    },
    header:{
        flexDirection:"row",
        alignItems:"center"
    },
    centeredView: {
      backgroundColor:"black", 
    },
    modalView: {
      height:hp(100),
      width:wp(100),
      backgroundColor: "red",
      borderRadius: 20,
    },
    textStyle: {
      color: "white", 
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
        width:wp(100)   ,
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
        fontSize:25
    },
    map: {
        width: wp(100),
        height: hp(80),
    },
})

export default ModalMaps;