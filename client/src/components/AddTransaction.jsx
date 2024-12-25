import React from 'react'

function AddTransaction() {
    return (
        <div className='w-3/4 m-12 bg-white p-2 rounded-2xl'>

            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-green-800 ">Transaction Name</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Grocery" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-green-800 ">Date</label>
                        <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="2023-02-15" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-green-800 ">Amount</label>
                        <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                    </div>
                    <div>
                        
                        <label for="countries" class="block mb-2 text-sm font-medium text-green-800 ">Select a Category</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Choose a Category</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                            
                        </select>
                    </div>
                </div>
                <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>

        </div>
    )
}

export default AddTransaction