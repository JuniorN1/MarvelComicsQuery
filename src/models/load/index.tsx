import md5 from "md5";
import { Alert } from "react-native";
import api from "../../services/api";
const PRIVATE_KEY = "Your private marvel key";
const PUBLIC_KEY = "Your public marvel key";
function createHash(timeStamp:any) {
    const toBeHashed = timeStamp + PRIVATE_KEY + PUBLIC_KEY;
    const hashedMessage = md5(toBeHashed);
    return hashedMessage;
}
 async function loadingComics(page:number) {

    const timeStamp = Date.now().toString();
    const offset = page ;
    const hash = createHash(timeStamp);
    const limit=50;
    const urlAPI =
    `/comics?offset=${offset}&format=comic&orderBy=issueNumber&limit=${limit}&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;    
    try{
        const response = await api.get(urlAPI);
        const{
   
            data,
          
        } =response;
        return data;
    }catch(err){
        Alert.alert(
            "Error",
            "Not cant loading comics!"
        );
    }


}
export default loadingComics;