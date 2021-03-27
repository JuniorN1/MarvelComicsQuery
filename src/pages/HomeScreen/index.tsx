import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { TouchableOpacity } from "react-native-gesture-handler";
import Items from '../../components/Items/index';
import ModalListe from "../../components/modaLItem";
import ModalMaps from "../../components/modalMap";
import loadingComicas from '../../models/load';
import searchComic from "../../models/seach";
import styles from '../../styles/styles';

interface Comics{
    description:string;
    title:string;
    thumbnail:{
        extension:string;
        path:string;
    }
}
interface PropsItemsModal{
    selectedItems?:Comics|null; 
    show:boolean;
}
interface PropsAddComic{
    comic:Comics;
    selected:boolean;
}
function HomeScreen(){
    const [list,setList]                            =   useState<Comics[]>([]);
    const [actualPage,setActualPage]                =   useState<number>(0);
    const [totalPage,setTotalPage]                  =   useState<number>(1);
    const [showLoadingComic,setShowLoadingComic]    =   useState<boolean>(false);
    const [modalListProp,setModalListProp]          =   useState<PropsItemsModal>({
        show:false,
        selectedItems:null
    });
    const [selectItem,setSelectItem]                =   useState<Comics[]>([]);
    const [modalMapsProp,setModalMapsProp]          =   useState<boolean>(false);
    const CallModelList=({selectedItems,show}:PropsItemsModal)=>{ 
        setModalListProp(
            {
                show,
                selectedItems
            }
        )
    }
    const CallHiddenModalItem=()=>{
        setModalListProp(
            { 
                show:false,
                selectedItems:null
            }
        )
    }
    const CallShowModalMaps=()=>{
        setModalMapsProp(true)
    }
    const CallHiddenModalMaps=()=>{
        setModalMapsProp(false)
    }
    const CallSetPage=(value:number)=>{      
        if(value===0){setActualPage(0); return}
        setActualPage(actualPage+value);
    }
    const CallSetList=(items:Comics[])=>{
        setList([...list,...items]);  
    }
    const CallSetListSearch=(items:Comics[])=>{
        setList(items);  
    }
    const CallSetTotalPage=(total:number)=>{
        setTotalPage(total);
    }
    const CallSetShowLoadingComic=(visible:boolean)=>{
        setShowLoadingComic(visible);
    }   
    const handlesAddItems =  ({selected,comic}:PropsAddComic) =>{ 
        if(selected){    
            setSelectItem([...selectItem,comic]) 
        }else{
            const remove = selectItem;
            const found = remove.findIndex((element:Comics) => element ===comic);
            remove.splice(found - 1, 1);
            setSelectItem(remove)         
        }
        return ;
    }
    const loading = async()=>{ 
        CallSetShowLoadingComic(true)
        try{            
            if(totalPage===list.length && actualPage>0)return;
            const response =  await loadingComicas(actualPage);
            CallSetList(response);
            CallSetPage(50);           
            if(totalPage===0)CallSetTotalPage(response.data.total);
        }catch(err){           
            Alert.alert(
                "Error!",
                "Não foi possivel listar os quadrinhos!"
            )
        }  
        CallSetShowLoadingComic(false)     
    } 
    const handlesSeach=async (seach:string)=>{
        CallSetPage(0);
       if(seach===''){   loading(); return;}
        try{
            const response =  await searchComic(seach);            
            CallSetListSearch(response); 
        }catch(err){
            Alert.alert(
                "Error!",
                "Não foi possivel listar os quadrinhos!"
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
                title="Loading Comics..."        
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
                    placeholder="Busca Rapida!" 
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
                item={modalListProp.selectedItems} 
                hiddenModalItems={CallHiddenModalItem}
           
            />
            
            <FlatList         
                data={list}
                keyExtractor={(hq,index) => String(index)}            
                onEndReachedThreshold={0.3}
                showsVerticalScrollIndicator={true}
                style={{marginTop:10}}
                onEndReached={()=>{
                    loading()
                }}
                renderItem={({item,index})=>(
                    <Items 
                        comic={item} 
                        selectComic={(value:PropsAddComic)=>handlesAddItems(value)}
                        showModalDetails={(value:PropsItemsModal)=>CallModelList(value)} 
                        findItem={selectItem}
                     
                    />
                )}

            />
            <TouchableOpacity onPress={()=>CallShowModalMaps()} style={styles.footer}>
                <Text style={styles.textH3}>Finalizar pedido</Text>
            </TouchableOpacity>
        </View>
    )
}



export default HomeScreen;