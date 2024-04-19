import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

interface stockInterface {
    symbol: String; 
    open: Number
}

const Stocks = () => {

    const params = useParams(); 
    const [stocks, setStocks] = useState<any[]>([]); 
    //@ts-ignore
    // let setStocks: any[] = []
    const number = Number.parseInt(params.id); 

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const response = await axios.get(`/stock/mongo`);
            if(response.data.prices) { 
                const data = response.data.prices;
                setStocks(data)
                console.log('number :- ', params.id);
            } else { 
                window.alert('error'); 
            }
        }, 1000); 

        return () => clearInterval(intervalId);

    }, []);

    return (
        <>

        <div className="flex flex-grow items-center justify-center"> 
                {/* <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg text-gray-200 mt-12 w-11/12 sm:w-96 lg:w-auto"> */}


            <div className='mt-3'>

                    <div className="flex flex-grow items-center justify-center">

                        <div className='max-w-full p-3 bg-gray-800 rounded-lg shadow-lg text-gray-200 mt-12 w-11/12 sm:w-96 lg:w-5/11'>
                            <div className='flex justify-between items-center' > 
                                <h1 className="ml-4 text-sm break-words">Stock Symbol</h1>	
                                <div className="mr-12 text-sm break-words text-green-500">Stock Open Price</div>	
                            </div>
                        </div>

                    </div>

                    {stocks.slice(0, number).map((todo, index) => ( 
                        <div key={index} className="flex flex-grow items-center justify-center"> 

                            <div className="max-w-full p-4 bg-gray-800 rounded-lg shadow-lg text-gray-200 mt-5 w-11/12 sm:w-96 lg:w-5/11">
                            
                            <div className='flex justify-between items-center' > 
                                <h1 className="ml-4 text-sm break-words">{todo.symbol}</h1>	
                                <div className="mr-10 text-sm break-words">{todo.open}</div>	
                            </div>
                            </div>
                        </div>
                    ))}

            </div>
            </div>
        </>
    )
}

export default Stocks; 