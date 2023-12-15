
'use client'

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {

   const [searchText,setSearchText]=useState('')

  const handleSearchChange = (e)=>{
    
      setSearchText(e.target.value)
      console.log(searchText);
      
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">

       <input type="text"
        placeholder="Search for text using tag"
        value={searchText}
        required
        onChange={handleSearchChange}
        className="search_input peer"
       />

      </form>
       
      
    </section>
  )
}

export default Feed