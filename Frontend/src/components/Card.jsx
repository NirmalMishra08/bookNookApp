import React from 'react'


function Card({ item }) {
 

    return (<>
        <div className='mt-4 pb-10 '>
            <div className="card bg-base-100 w-96  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                <figure className="px-10 pt-10">
                    <img
                        src={item.image}
                        alt='shoes'
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{item.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                    </div>
                    <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[120px]">Price:{item.price}</button>
                    <div>
                    <button type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default Card
