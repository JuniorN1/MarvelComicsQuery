import md5 from "md5";
import { Alert } from "react-native";
import api from "../../services/api";
import Marvel_key from '../../configs/index.json';
function createHash(timeStamp:any) {
    const toBeHashed = timeStamp + Marvel_key.PRIVATE_KEY + Marvel_key.PUBLIC_KEY;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;
}
interface Comic{
    id:number;
    title:string;
    description:string;
    thumbnail:string;
}
async function loadingComics(page:number,title:string) {
    const timeStamp = Date.now().toString();
    const hash = createHash(timeStamp);
    const limit=10;
    const urlAPI =
    `/comics?title=${title}&offset=${page}&format=comic&orderBy=issueNumber&limit=${limit}&ts=${timeStamp}&apikey=${Marvel_key.PUBLIC_KEY}&hash=${hash}`;    
    try{
        const response = await api.get(urlAPI);
        const{   
            data,          
        } =response;
        const result = data.data.results.map(({title,description,thumbnail,id}:Comic)=>{
            return (
            { title,description,thumbnail,id}
            )
        })

        return result;
    }catch(err){
        Alert.alert(
            "Error",
            "Não foi possivel carregar os quadrinhos!"
        );
    }
}
export default loadingComics;