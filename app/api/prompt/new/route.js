import { connectToDB } from "@utils/database"
import  Prompt  from "@models/prompt"


 export const GET = async(response)=>{
  try {
    await connectToDB()
  } catch (error) {
    
  }

}