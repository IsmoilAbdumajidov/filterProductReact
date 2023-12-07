import React, { useEffect, useState } from 'react'

const SearchingFiltering = ({filteredByCategory,searchingHandler}) => {
    const [getAllCategories, setGetAllCategories] = useState([])
    useEffect(() => {
        const getAllCategories = async () => {
            try {
                const resp = await fetch(`https://dummyjson.com/products/categories`);
                const data = await resp.json()
                setGetAllCategories(["all",...data])
            } catch (error) {
                console.log(error);
            }
        }
        getAllCategories()
    }, [])


    return (
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <select onChange={(e)=>filteredByCategory(e.target.value)} className="w-full bg-transparent border outline-none p-2 rounded md:w-52 dark:text-white dark:border-white/10 border-black/10">
               {getAllCategories.map((item,i)=>(
                 <option key={i} className="text-slate-500 dark:text-slate-400 dark:bg-slate-900" value={item}>{item}</option>
               ))}
            </select>
            <input onChange={(e)=>  searchingHandler(e.target.value)} type="text" className="w-full bg-transparent border outline-none rounded md:w-96 py-2 px-4 dark:border-white/10 border-black/10 dark:text-white dark:placeholder:text-white" placeholder="Search...!" />
        </div>
    )
}

export default SearchingFiltering