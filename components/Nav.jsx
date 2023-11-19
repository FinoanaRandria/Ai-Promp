'use client'

import Link from "next/link"
import Image from "next/image"
import {useState , useEffect} from 'react'
import {signIn, signOut, useSession , getProviders} from 'next-auth/react'


const Nav = () => {

  const isUserLoggedIn = true;



  return (
    <nav className="flex-between w-full mb-16 pt-3">
    <Link href="/" className="flex gep-2 flex-center">
         <Image
          src="/assets/images/logo.svg"
          alt="promptopia logo"
          width={30}
          height={30}
          className="object-contain"
         />
 
         <p className="logo_text">Promptopia</p>

         

    </Link>

      {/* Desktop  Navigation */}
           <div className="sm:flex hidden">
                 {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                            <Link className="black_btn" href="/create-promp">
                               Create Post
                            </Link>

                      <button className="outline_btn" type="button" onClick={signOut}>
                          Sign Out     
                      </button>
                    </div>

                 ):(
                   <>
                   
                   </>
                 )}
           </div>
    </nav>
  )
}

export default Nav