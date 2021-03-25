import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import Items from '../../components/Items/index';
import ModalListe from "../../components/modaLItem";
import ModalMaps from "../../components/modalMap";
import loadingComicas from '../../models/load';
import searchComic from "../../models/seach";
import styles from '../../styles/styles';
interface PropsItemsModal{
    selectedItems:any; 
    show:boolean;
}
function HomeScreen(){
    const [list,setList]                            =   useState<any[]>([]);
    const [actualPage,setActualPage]                =   useState<number>(0);
    const [totalPage,setTotalPage]                  =   useState<number>(0);
    const [showLoadingComic,setShowLoadingComic]    =   useState<boolean>(false);
    const [modalListProp,setModalListProp]          =   useState<any>({
        show:false,
        item:null
    });
    const [modalMapsProp,setModalMapsProp] = useState<boolean>(false);

    const CallModelList=({selectedItems,show}:PropsItemsModal)=>{
        setModalListProp(
            {
                show:show,
                item:selectedItems
            }
        )
    }
    const CallHiddenModalItem=()=>{
        setModalListProp(
            { 
                show:false,
                item:null
            }
        )
    }
    const CallShowModalMaps=()=>{
        setModalMapsProp(true)
    }
    const CallHiddenModalMaps=()=>{
        setModalMapsProp(false)
    }
    const CallSetPage=()=>{
        setActualPage(actualPage+50);
    }
    const CallSetList=(items:any)=>{
        setList([...list,...items]);  
    }
    const CallSetTotalPage=(total:number)=>{
        setTotalPage(total);
    }
    const CallSetShowLoadingComic=(visible:boolean)=>{
     
        setShowLoadingComic(visible);
    }
    const loading = async()=>{ 
        CallSetShowLoadingComic(true)
        try{
            
            if(totalPage===list.length && actualPage>0)return;

            const response =  await loadingComicas(actualPage); 

            CallSetList(response.data.results);
            CallSetPage();
           
            if(totalPage===0)CallSetTotalPage(response.data.total);
            
        }catch(err){           
            Alert.alert(
                "Error!",
                "Not receive Response comics query!"
            )
        }  
        CallSetShowLoadingComic(false)
    }  

    const handlesSeach=async (seach:string)=>{
       if(seach===''){loading(); return;}
        try{
            const response =  await searchComic(seach);            
            setList(response.data.results); 
        }catch(err){
            Alert.alert(
                "Error!",
                "Not receiver Response seach comics query!"
            )
        }      
    }
    useEffect(()=>{  
        loading();
    },[]);


  
    return (        
        <View style={styles.container}>
            <AwesomeAlert
                show={showLoadingComic}
                showProgress={true}
                progressColor="#777777"
                progressSize="large"
                title="Is Loading Comics..."        
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
            /> 
            <View style={styles.header}>
                <Text style={styles.textHeader}>
                    MARVEL COMICS
                </Text>
            </View>
            <View style={styles.containerSearch}>
                <FontAwesome 
                    name="search" 
                    style={styles.iconsSearch} 
                />
                <TextInput 
                    placeholder="Search Comics!" 
                    placeholderTextColor="red" 
                    style={styles.seachBox}
                    onChangeText={(text)=>handlesSeach(text)}

           
                />
            </View>
            <ModalMaps 
                show={modalMapsProp} 
                hiddenModal={()=>CallHiddenModalMaps()}
            />
            <ModalListe  
                show={modalListProp.show} 
                item={modalListProp.item} 
                hiddenModalItems={CallHiddenModalItem}
                showModalMaps={()=>CallShowModalMaps()}
            />
            
            <FlatList 
                data={list}
                keyExtractor={(hq,index) => String(index)}            
                onEndReachedThreshold={0.3}
                showsVerticalScrollIndicator={true}
                style={{marginTop:10}}
                onEndReached={()=>loading()}
                renderItem={({item})=>(
                    
                    <Items 
                        item={item} 
                        modalProps={(value:PropsItemsModal)=>CallModelList(value)}  
                    />
                )}

            />
        </View>
    )
}



export default HomeScreen;