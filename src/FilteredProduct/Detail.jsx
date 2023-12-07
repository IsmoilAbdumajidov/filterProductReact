import React from 'react'

const Detail = ({detail,setDetail}) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex items-center justify-center px-8 sm:px-10 lg:px-24 pt-6 sm:pt-20">
            {/* <!-- detail Product --> */}
            <div className="flex w-full mx-3 sm:mx-10 p-4 md:w-[800px] flex-col sm:flex-row border dark:border-white/10 border-black/10 gap-3 shadow-md rounded-lg overflow-hidden bg-slate-900">
                <div className="w-[40%] overflow-hidden rounded-md cursor-pointer">
                    <img className="w-full aspect-square object-cover object-center h-full" src={detail.thumbnail } alt="" />
                </div>
                <div className="flex w-full flex-col p-4 gap-2 pt-5 flex-1">
                    <h1 className='text-3xl font-bold text-slate-900 dark:text-white'>{detail.title}</h1>
                    <p className='font-bold text-slate-900 dark:text-white'><span className="font-semibold">Brand:</span>Apple
                    </p>
                    <p className='font-semibold text-cyan-500'><span className="font-semibold">Price:</span> ${detail.price}</p>
                    <p className='font-semibold text-yellow-500'><span className="font-semibold">Stock: </span>{detail.stock}</p>
                    <p className='text-slate-500 dark:text-slate-400'><span
                        className="font-semibold">Descritption:</span>{detail.description}</p>
                    <button onClick={()=>setDetail('')}  className="bg-red-500 text-white sm:w-32 py-2 px-3 text-center sm:ml-auto mt-auto rounded back">Back</button>
                </div>
            </div>
        </div>
    )
}

export default Detail