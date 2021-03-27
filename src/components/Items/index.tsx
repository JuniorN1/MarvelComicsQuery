import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    showModalDetails:any;
    selectComic:{
        option:any;
        item:boolean;
    }|any;
    comic:Comic;
    findItem :Comic[];
}
const handlesFind=(comic:Comic,findItem:Comic[])=>{
    const check =    findItem.find((element:Comic) => element.title ===comic.title);  
    return check!=undefined?true:false
}
const Items =  ({showModalDetails,selectComic,comic,findItem}:Props)=>{ 
   

    const [selectOrRemove,setSelectOrRemove] = useState<boolean>(
        handlesFind(comic,findItem)
    )    
    const handlesShowDetails=(comic:Comic) =>{
        showModalDetails({show:true,selectedItems:comic});
    } 
    const description = (description:string)=>{
        if(description === null)return "This comic not have Discription!";
        return (String(description).substr(0,100));
    } 
    const handlesSelect=async (comic:Comic)=>{
        const selected = !selectOrRemove;
        setSelectOrRemove(selected);
        selectComic({selected,comic});
    }
    return(
        <View style={styles.listContainer}>                       
            <Image style={styles.hqThumbnail} source={{
                uri:`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            }/>
            <View style={styles.hqInformationsAndOptions}>         
                <View style={styles.containerInformation}>
                    <Text style={styles.title}>{comic.title.substr(0,10)}...</Text>                
                    <Text style={styles.description}>{description(comic.description)}...</Text>                
                </View>
                <View style={styles.buttonItemsContainer}>
                    <TouchableOpacity                                     
                        onPress={()=>handlesShowDetails(comic)}
                        style={styles.buttonListContaine} 
                        activeOpacity={0.7}    
                    >                
                        <Text style={styles.textButton}> 
                            Detalhes
                        </Text>                
                    </TouchableOpacity>
                    <TouchableOpacity                                     
                        onPress={()=>handlesSelect(comic)}
                        style={selectOrRemove?styles.buttonListContaineRemove:styles.buttonListContaine} 
                        activeOpacity={0.7}    
                    >                
                        <Text style={styles.textButton}>                     
                            {selectOrRemove?"Remove":"Selecionar"}
                        </Text>                
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Items;
const COLOR_1 ="red";
const COLOR_2 ="#ffffff";
const COLOR_3 ="darkblue";
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
    buttonListContaineRemove:{
        height:40,  
        marginLeft:wp(1), 
        marginRight:wp(1),
        width:wp(25),
        backgroundColor:COLOR_3,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:hp(2),
    },
    buttonItemsContainer:{
        flexDirection:'row',
        width:wp(54),
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
        marginLeft:wp(1), 
        marginRight:wp(1),
        width:wp(25),
        backgroundColor:COLOR_1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:hp(2),
    },
    containerInformation:{
       height:hp(20)
    },
    textButton:{
        color:COLOR_2,
        fontFamily:"Marvel",
        fontSize:15
    },
})