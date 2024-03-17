"use client"
import React from 'react'
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
    HomeIcon,
    LockClosedIcon,
    
  } from "@heroicons/react/24/outline";
  import Link from 'next/link';
  import { signOut } from 'next-auth/react';
  import { useRouter } from 'next/navigation';


const Special = () => {
const router = useRouter()

        return (
          <div className="fixed h-[dvh] w-screen  z-[10] mr-12">
            <div className="absolute top-[80dvh] right-6 h-80">
              <SpeedDial>
                <SpeedDialHandler>
                  <IconButton size="lg" className="rounded-full">
                    <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                  </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                  <SpeedDialAction>
                    <Link href="/exam">
                     <HomeIcon className="h-5 w-5" />
                   </Link>
                  </SpeedDialAction>
                  <SpeedDialAction>
                    <LockClosedIcon onClick={()=> signOut({redirect : false }).then(()=> { router.push('/')})} className="h-5 w-5" />
                  </SpeedDialAction>
                </SpeedDialContent>
              </SpeedDial>
            </div>
         </div>
        );
      }


export default Special
