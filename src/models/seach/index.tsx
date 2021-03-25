import md5 from "md5";
import { Alert } from "react-native";
import api from "../../services/api";
const PRIVATE_KEY = "34523e2176202dabeff84c4725071ea289cc0e94";
const PUBLIC_KEY = "429a78395e00f0adf43dbc881c508f45";
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