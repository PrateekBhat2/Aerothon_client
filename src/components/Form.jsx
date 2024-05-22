import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Form(){
    const StartCityRef = useRef();
    const DestCityRef = useRef();
    const [flag, setFlag] = useState(false);


    async function onClickHandler(e) {
        e.preventDefault();
        setFlag(!flag);
        try {
            useEffect(() => {
                const res = axios.post("", {
                    username: StartCityRef.current.value,
                    password: DestCityRef.current.value,
                });
            }, [flag])
        }
        catch (err) {

        }
    }

    return (
        <div className="ml-40 w-2/5">
            <h1 className="text-4xl mb-6 text-center"> Enter Details </h1>
            <form className="max-w-md mx-auto flex flex-col justify-around">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                <input type="text" id="" placeholder="Enter city" class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                <input type="text" id="" placeholder="Enter city" class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <div class="relative max-w-sm mb-2">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>
                <button type="button" onClick={onClickHandler} class="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                </button>
            </form>
        </div>
    );
}