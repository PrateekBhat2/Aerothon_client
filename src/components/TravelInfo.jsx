import Button from "./Button";


export default function TravelInfo() {
    return (
        <div className="mt-8 grow">
            <h1 className="text-4xl mb-6 text-center"> Enter Details </h1>
            <form className="max-w-md mx-auto flex flex-col justify-around">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                <input type="text" id="" placeholder = "Enter city" class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                <input type="text" id="" placeholder = "Enter city" class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <Button />
            </form>
        </div>
    );
}