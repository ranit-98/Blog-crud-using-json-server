import axios from "axios";

const API_URL=`http://localhost:3003/blogs`
const Img_URL=`http://localhost:3003/photo`
export const AddData=async(data)=>{
        try{
             return axios.post(API_URL,data)
        }catch(error){
            console.log(error.message);
        }
}

export const GetData=async()=>{
    try{
        return await axios.get(API_URL)
    }catch(error){
        console.log(error.message);
    }
}
export const GetSingleData=async(id)=>{
    try{
            return await axios.get(`${API_URL}/${id}`)
    }catch(error){
        console.log(error.message);
    }
   
}


export const GetImage=async(photo)=>{
   
    try{
         return await axios.get(`${Img_URL}/${photo}`)
      
}catch(error){
    console.log(error);
}

}

export const deleteUser=async (id)=>{
    try {
        return await axios.delete(`${API_URL}/${id}`)
    }
    catch (error) {
        console.log('Error while calling getUsers API', error.message)
    }
}