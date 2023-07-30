import { React, useState } from "react";
import './searchbar.css';
import Image from "next/image";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    return (
        <div className="flex bg-gray-900 p-2.5 rounded-md border border-gray-400">
            <Image
                src='/images/searchimg.png'
                alt='search'
                width={17}
                height={17}
                className='object-contain'
            />
            <input 
                type="text"
                placeholder="Search"
                onChange={handleChange}
                value={searchInput}
                className="bg-gray-900 pl-3 text-white"
            />
        </div>
        
    );
}

export default SearchBar;