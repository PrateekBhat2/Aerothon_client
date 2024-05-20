import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function TravelInfo() {
    const StartCityRef = useRef();
    const DestCityRef = useRef();
    const [flag, setFlag] = useState(false);


    async function onClickHandler(e){
        e.preventDefault();
        setFlag(!flag);
        try{
            useEffect(() => {
                const res = axios.post("", {
                    username: StartCityRef.current.value,
                    password: DestCityRef.current.value,
                  });
            }, [flag])
        }
        catch(err){

        }
    }

    return (
        <div className="mt-20 grow">
            <h1 className="text-4xl mb-6 text-center"> Enter Details </h1>
            <form className="max-w-md mx-auto flex flex-col justify-around">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                <input type="text" id="" placeholder = "Enter city" class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                <input type="text" id="" placeholder = "Enter city" class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <button type="button" onClick = {onClickHandler} class="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
        </div>
    );
}