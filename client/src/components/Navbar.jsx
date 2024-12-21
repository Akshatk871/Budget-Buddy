import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="bg-green-950 border-gray-200 ">
                <div class="max-w-screen-xl text-white flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">Budget Buddy</span>
                    </a>
                    
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-950 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                            <li>
                                <a href="/" class="block py-2 px-3 text-white  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/dashboard" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Dashboard</a>
                            </li>
                            {/* <li>
                                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"></a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Pricing</a>
                            </li> */}
                            <li>
                                <a href="/login" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar