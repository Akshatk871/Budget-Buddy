import React from 'react'

function RecentTransactions(props) {

    const recentTransactions = props.transactions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
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
            
        {recentTransactions.map((transaction) => (
            <tr key={transaction.id} className="bg-white border-b">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {transaction.name}
              </th>
              <td className="px-6 py-4">
                {new Date(transaction.date).toLocaleDateString()}
              </td>
              <td className={`px-6 py-4 ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4">
                {transaction.category}
              </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>
  )
}

export default RecentTransactions