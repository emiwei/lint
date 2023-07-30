"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchbar";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);
    
    return (
        <div className="flex-between flex-row w-full mb-16 p-5 bg-gray-800">
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/images/lovely.png'
                    alt='logo'
                    width={45}
                    height={45}
                    className='object-contain'
                />
                <h1 className='logo_text pl-2'>emily's tracker</h1>
            </Link>
            <SearchBar></SearchBar>
            <button
                type='button'
                className='bg-gray-700 rounded-md p-2'
                >
                <span className='signin_text'>sign in</span>
            </button>
        </div>
    )
}

export default Navbar;