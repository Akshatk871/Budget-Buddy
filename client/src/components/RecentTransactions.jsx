import React from 'react'

function RecentTransactions() {
  return (
    <div class="m-5 rounded-2xl relative overflow-x-auto">
    <table class="w-full  text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-green-900 bg-emerald-100 uppercase  ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Transaction name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Grocery
                </th>
                <td class="px-6 py-4">
                    2028-05-18
                </td>
                <td class="px-6 py-4">
                    ₹5100
                </td>
                <td class="px-6 py-4">
                    Expense
                </td>
            </tr>
            
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Grocery
                </th>
                <td class="px-6 py-4">
                    2028-05-18
                </td>
                <td class="px-6 py-4">
                    ₹5100
                </td>
                <td class="px-6 py-4">
                    Expense
                </td>
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Grocery
                </th>
                <td class="px-6 py-4">
                    2028-05-18
                </td>
                <td class="px-6 py-4">
                    ₹5100
                </td>
                <td class="px-6 py-4">
                    Expense
                </td>
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Grocery
                </th>
                <td class="px-6 py-4">
                    2028-05-18
                </td>
                <td class="px-6 py-4">
                    ₹5100
                </td>
                <td class="px-6 py-4">
                    Expense
                </td>
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Grocery
                </th>
                <td class="px-6 py-4">
                    2028-05-18
                </td>
                <td class="px-6 py-4">
                    ₹5100
                </td>
                <td class="px-6 py-4">
                    Expense
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default RecentTransactions