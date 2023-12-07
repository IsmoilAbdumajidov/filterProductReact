import React, { useEffect, useState } from 'react'
import Loader from './loadre/Loader'
import Products from './Products'
import Detail from './Detail'
import SearchingFiltering from './SearchingFiltering'

const url = "https://dummyjson.com"
const FilteredProduct = () => {
    const [products, setProducts] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [detail, setDetail] = useState('')
    const [defData, setDefData] = useState([])
    useEffect(() => {
        const fetchingProducts = async () => {
            setIsFetching(true)
            try {
                const res = await fetch(`${url}/products`)
                const data = await res.json()
                setProducts(data.products)
                setDefData(data.products)
                setIsFetching(false)
            } catch (error) {
                console.log(error);
            }
        }
        fetchingProducts()
    }, [])

    const detailHandler = (elem) => {
        setDetail(elem)
    }
    const filteredByCategory = async (cat) => {
        setIsFetching(true)
        if (cat === "all") {
            setProducts(defData)
            setIsFetching(false)
        }
        else {
            try {
                const res = await fetch(`${url}/products/category/${cat}`)
                const data = await res.json()
                setProducts(data.products)
                setIsFetching(false)
            } catch (error) {
                console.log(error);
            }
        }
    }
    const searchingHandler = async (value) => {
        try {
            const res = await fetch(`${url}/products/search?q=${value}`)
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <div className="text-3xl font-semibold text-center text-cyan-500 h-20 mb-20 flex items-center justify-between shadow-md dark:shadow-white/10 px-8 lg:px-24">
                <h1>Fitered and Fetched Elements</h1>
            </div>
            <div className="flex flex-col pb-10 px-8 sm:px-10 lg:px-24 relative">
                {/* <!-- search and filter --> */}
                <SearchingFiltering searchingHandler={searchingHandler} filteredByCategory={filteredByCategory} />
                {/* <!-- Product Container --> */}
                <div id="productContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10">
                    {/* <!-- Product --> */}
                    {products.map((item, i) => (
                        <Products detailHandler={detailHandler} key={i} item={item} />
                    ))}
                </div>

                {/* <!-- Detail page --> */}
                {detail && <Detail detail={detail} setDetail={setDetail} />}
                {/* <!--Spinner page --> */}
                {isFetching && <Loader />}
            </div>

        </div>
    )
}

export default FilteredProduct