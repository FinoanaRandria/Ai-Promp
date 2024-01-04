import { connectToDB } from "@utils/database"
import  Prompt  from "@models/prompt"

//method post 
export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json()


    console.log(prompt);


    try {

        await connectToDB()
        //create pormpt wiht schema
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })
        //save prompt 
        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {
            status: 201,

        })

    } catch (error) {
        return new Response('Error created post', { status: 500 })
    }

}


