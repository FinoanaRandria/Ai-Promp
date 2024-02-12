import PromptCard from "./PromptCard"

const Profile = ({name,data,handleDelete,handleEdit,desc}) => {
  return (
    <>
      <section className="w-full">
         
          <h1 className="head_text text-left">
             {name} <span className="blue_gradient">
                  Profile
              </span>
          </h1>
        
               <p className="desc text-left">{desc}</p>


               <div className="mt-10 prompt_layout">
                    { data.map((post)=>(
                         
                         <PromptCard
                          key={post._id}
                          post={post}
                          handleEdit={()=>handleEdit && handleEdit([post]) }
                         />
                
                    ))
                       
                    }
               </div>
      </section> 
    </>
  )
}

export default Profile