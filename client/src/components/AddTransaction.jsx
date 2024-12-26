import React ,{useState} from 'react'

function AddTransaction({onAddTransaction}) {

    const [transaction, setTransaction] = useState({
        name: '',
        date: '',
        amount: '',
        category: '',
        type: 'expense', // default type
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleClick = async (e) => {
        e.preventDefault();
        const authToken = localStorage.getItem('authToken');
    
        if (!authToken) {
          console.error('No auth token found.');
          return;
        }
    
        try {
          const response = await fetch('http://localhost:8080/api/transactions/add', {
            method: 'POST',
            headers: {
              Authorization: authToken,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
          });
          if (response.ok) {
            const newTransaction = await response.json();
            onAddTransaction(newTransaction); // Call the callback to update the transactions list
            setTransaction({
              name: '',
              date: '',
              amount: '',
              category: '',
              type: 'expense',
            });
          } else {
            console.error('Failed to add transaction:', response.statusText);
          }
        } catch (error) {
          console.error('Error adding transaction:', error);
        }
      }; 
    return (
        <div className='w-3/4 m-12 bg-white p-2 rounded-2xl'>

            <form onSubmit={handleClick}>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-green-800 ">Transaction Name</label>
                        <input type="text" id="name" name="name" value={transaction.name} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Grocery" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-green-800 ">Date</label>
                        <input type="date" id="date" name="date" value={transaction.date} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="2023-02-15" required />
                    </div>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-green-800 ">Amount</label>
                        <input type="number" id="amount" name="amount" value={transaction.amount} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                    </div>
                    <div>
                        
                        <label for="countries" class="block mb-2 text-sm font-medium text-green-800 ">Select a Category</label>
                        <select  id="type" name="type" value={transaction.type} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Choose a Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                            
                        </select>
                    </div>
                    <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-green-800 ">Select a Category</label>
                        <select id="category" name="category" value={transaction.category} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option selected>Choose a Category</option>
                            <option value="Rent">Rent</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Salary">Salary</option>
                            <option value="Loan">Loan</option>
                            <option value="Stocks">Stocks</option>
                            <option value="Sales">Sales</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            
                            
                        </select>
                    </div>
                </div>
                <button type="submit" onClick={handleClick} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
            </form>

        </div>
    )
}

export default AddTransaction