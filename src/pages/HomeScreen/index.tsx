import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TextInput, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { TouchableOpacity } from "react-native-gesture-handler";
import Items from '../../components/Items/index';
import ModalListe from "../../components/modaLItem";
import ModalMaps from "../../components/modalMap";
import loadingComicas from '../../models/load';
import styles from '../../styles/styles';

interface Comics{
    id:number;
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
    const [searchTitle,setSearchTitle]              =   useState<string>("DeadPool");
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
    const CallSetTotalPage=(total:number)=>{
        setTotalPage(total);
    }
    const CallSetShowLoadingComic=(visible:boolean)=>{
        setShowLoadingComic(visible);
    }   
    const handlesAddItems =  async ({selected,comic}:PropsAddComic) =>{ 

        if(selected){    
            setSelectItem([...selectItem,comic]) 
        }else{
            const remove = selectItem;
            const found = await remove.findIndex((element:Comics) => element.title ===comic.title);         
            const resultRemove= await remove.splice(found, 1);
            const[hq]=resultRemove   
       
            if(hq.title===comic.title)setSelectItem(remove) 
            else{
                Alert.alert(
                    "Error",
                    "Não Foi possivel remover o item!"
                )
            }        
        }
        return ;
    }
    const loading = async()=>{   
        CallSetShowLoadingComic(true)
        try{  
            const response =  await loadingComicas(actualPage,searchTitle===""?"DeadPool":searchTitle);
            CallSetList(response);
            CallSetPage(5);           
            CallSetTotalPage(response.length);
        }catch(err){           
            Alert.alert(
                "Error!",
                "Não foi possivel listar os quadrinhos!"
            )
        }  
        CallSetShowLoadingComic(false)     
    } 
    const CallSetSearchTitle = async (title:string)=>{
        if(title!="" && title!=searchTitle){          
            list.length=0;
            CallSetPage(0); 
            if(list.length===0) setSearchTitle(title)        
        }       
    }
    useEffect(()=>{ 
       loading();
    },[searchTitle]);
    
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
          
                    onEndEditing={(event)=>CallSetSearchTitle(event.nativeEvent.text)}           
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