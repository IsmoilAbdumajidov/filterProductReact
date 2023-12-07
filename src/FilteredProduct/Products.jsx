import React from 'react'

const Products = ({ item, detailHandler }) => {
    return (
        <div className="flex border dark:border-white/10 border-black/10 flex-col gap-4 rounded-md overflow-hidden bg-white dark:bg-slate-800">
            <div className="aspect-[3/2] w-full overflow-hidden cursor-pointer">
                <img className="w-full object-cover object-center h-full" src={item.thumbnail} alt="" />
            </div>
            <div className="flex flex-col flex-1 p-4 gap-2">
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h1>
                <p className="font-semibold text-cyan-500">${item.price}</p>
                <p className="font-semibold text-slate-900 dark:text-white"><span>Stock:</span>{item.stock}</p>
                <p className="text-base text-slate-500 dark:text-slate-400">{item.description}</p>
                <button onClick={()=>detailHandler(item)} className="bg-cyan-500 text-white py-2 px-3 text-center mt-auto rounded detail">Details</button>
            </div>
        </div>
    )
}

export default Products