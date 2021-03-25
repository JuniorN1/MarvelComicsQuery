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
async function searchComic(title:string) {
    const timeStamp = Date.now().toString();
    const hash = createHash(timeStamp);
    const urlAPI = 
    `/comics?title=${title}&orderBy=issueNumber&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;   
    try{
        const response = await api.get(urlAPI);
        const{
            data
        } =response;
        return data;
    }catch(err){
        Alert.alert(
            "Error",
            "Not cant search comics!"
        );
    }

}

export default searchComic;