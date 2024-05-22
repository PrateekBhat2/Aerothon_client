export default function DevCard(props) {
    return (
        <div class="w-4/5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
                
            </div>
            <div class="flex flex-col items-center pb-10">
                <img class="w-28 h-24 mb-3 rounded-full shadow-lg" src={props.source} alt="Bonnie image" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.Name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{props.Role}</span>
                <div class="flex mt-4 md:mt-6">
                    <a href={props.LinkedIn} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">LinkedIn</a>
                    <a href={props.Email} class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Email</a>
                </div>
            </div>
        </div>
    );
}