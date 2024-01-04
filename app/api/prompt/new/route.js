import { connectToDB } from "@utils/database"
import  Prompt  from "@models/prompt"


 export const GET = async(response)=>{
  try {
    await connectToDB()

    const prompts = await Prompt.find({}).populate('creator')

    return new response(JSON.stringify(prompts), {
        status:200
    })
  } catch (error) {
    return new response("failed to fetch all prompts", {
        status:500
  })

}