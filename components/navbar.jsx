"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchbar";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    return (
        <div className="flex-between flex-row w-full mb-6 p-4 bg-gray-800">
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/images/lovely.png'
                    alt='logo'
                    width={45}
                    height={45}
                    className='object-contain'
                />
                <div className='flex flex-col pl-2'>
                    <span className='logo_text'>lint</span>
                    {session?.user ? (
                        <span className='username_display'>{session?.user.name.split(" ")[0].toLowerCase()}'s tracker</span>
                    ) : (
                         <>
                         </>
                    )}
                </div>
                

            </Link>
            <SearchBar></SearchBar>
            {session?.user ? (
                <button 
                    type='button'
                    className='bg-gray-700 rounded-md p-2'
                    onClick={signOut}
                >
                    <span className='signin_text'>sign out</span>
                </button>
            ) : (
                <>
                    {providers && 
                        Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                                className='bg-gray-700 rounded-md p-2'
                            >
                                <span className='signin_text'>sign in</span>
                            </button>
                        ))}  
                </>
            )}
        </div>
    )
}

export default Navbar;