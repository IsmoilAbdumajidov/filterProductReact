import React from 'react'
import './loader.css'

const Loader = () => {
    return (
        <div  className="w-full z-10 h-full flex fixed top-0 left-0 bottom-0 right-0 backdrop-blur  justify-center  items-center">
            <div className="atom-spinner">
                <div className="spinner-inner">
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-line"></div>
                    <div className="spinner-circle">
                        &#9679;
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader