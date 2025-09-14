import React, { useState } from "react";
import { DollarSign, TrendingUp, Wallet, PlusCircle, Trash2, X, LayoutDashboard, ReceiptText } from "lucide-react";

// --- Reusable Components ---

function StatCard({ title, value, color = "text-green-600", icon }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md text-gray-800 hover:shadow-xl hover:bg-gray-50 transition-all">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base font-semibold tracking-wide text-gray-500 uppercase">
          {title}
        </h2>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="flex justify-start items-center mt-3">
        <span className={`text-3xl sm:text-4xl font-extrabold ${color}`}>
          {value}
        </span>
      </div>
    </div>
  );
}

// --- Page Components ---

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Welcome to your expense tracker dashboard. Here's a summary of your finances.
      </p>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard
          title="Total Expenses"
          value="$1,000"
          color="text-red-600"
          icon={<DollarSign className="w-6 h-6 text-red-500" />}
        />
        <StatCard
          title="Income"
          value="$3,500"
          color="text-green-600"
          icon={<TrendingUp className="w-6 h-6 text-green-500" />}
        />
        <StatCard
          title="Savings"
          value="$2,500"
          color="text-indigo-600"
          icon={<Wallet className="w-6 h-6 text-indigo-500" />}
        />
      </div>

      {/* Recent Transactions Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>
        <div className="bg-white rounded-xl shadow-sm p-6 text-gray-500 text-center">
          <p>No transactions yet.</p>
          <p className="text-sm mt-2">Add your first expense on the 'Expenses' page!</p>
        </div>
      </div>
    </div>
  );
}

function ExpensesPage() {
    const [expenses, setExpenses] = useState([
        { id: 1, description: 'Groceries', amount: 75.50, category: 'Food', date: '2025-09-12' },
        { id: 2, description: 'Gasoline', amount: 40.00, category: 'Transport', date: '2025-09-11' },
        { id: 3, description: 'Movie Tickets', amount: 25.00, category: 'Entertainment', date: '2025-09-10' },
    ]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newExpense, setNewExpense] = useState({ description: '', amount: '', category: 'Food', date: new Date().toISOString().slice(0,10) });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExpense({ ...newExpense, [name]: value });
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        if (!newExpense.description || !newExpense.amount) return;
        setExpenses([...expenses, { ...newExpense, id: Date.now(), amount: parseFloat(newExpense.amount) }]);
        setNewExpense({ description: '', amount: '', category: 'Food', date: new Date().toISOString().slice(0,10) });
        setIsFormVisible(false);
    };

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2);

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800">Expenses</h1>
                    <p className="mt-2 text-gray-600">Track and manage your expenses here.</p>
                </div>
                <button
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    className="flex items-center gap-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
                >
                    {isFormVisible ? <X className="w-5 h-5" /> : <PlusCircle className="w-5 h-5" />}
                    <span>{isFormVisible ? 'Cancel' : 'Add Expense'}</span>
                </button>
            </div>
            
            {/* Add Expense Form */}
            {isFormVisible && (
                 <div className="mt-6 bg-white p-6 rounded-2xl shadow-md">
                     <form onSubmit={handleAddExpense} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                        <div className="w-full">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <input type="text" name="description" value={newExpense.description} onChange={handleInputChange} placeholder="e.g., Coffee" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                        </div>
                         <div className="w-full">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount ($)</label>
                            <input type="number" name="amount" value={newExpense.amount} onChange={handleInputChange} placeholder="0.00" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                        </div>
                         <div className="w-full">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                            <select name="category" value={newExpense.category} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Food</option>
                                <option>Transport</option>
                                <option>Entertainment</option>
                                <option>Utilities</option>
                                <option>Other</option>
                            </select>
                        </div>
                         <div className="w-full">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                            <input type="date" name="date" value={newExpense.date} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                        </div>
                         <button type="submit" className="md:col-start-2 lg:col-start-4 w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition-all">
                            Add
                        </button>
                    </form>
                 </div>
            )}

            {/* Total Expenses Display */}
             <div className="mt-8">
                <div className="inline-block bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-gray-500 font-semibold">Total Expenses This Month</h3>
                    <p className="text-3xl font-bold text-red-600">${totalExpenses}</p>
                </div>
            </div>

            {/* Transactions Table */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Transaction History
                </h2>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {expenses.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-4 font-semibold text-gray-600">Description</th>
                                        <th className="p-4 font-semibold text-gray-600">Amount</th>
                                        <th className="p-4 font-semibold text-gray-600">Category</th>
                                        <th className="p-4 font-semibold text-gray-600">Date</th>
                                        <th className="p-4 font-semibold text-gray-600"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expenses.sort((a, b) => new Date(b.date) - new Date(a.date)).map((expense) => (
                                        <tr key={expense.id} className="border-t border-gray-200 hover:bg-gray-50">
                                            <td className="p-4 text-gray-800">{expense.description}</td>
                                            <td className="p-4 text-red-600 font-mono">- ${expense.amount.toFixed(2)}</td>
                                            <td className="p-4 text-gray-500">
                                                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{expense.category}</span>
                                            </td>
                                            <td className="p-4 text-gray-500">{expense.date}</td>
                                            <td className="p-4 text-right">
                                                <button onClick={() => handleDeleteExpense(expense.id)} className="text-gray-400 hover:text-red-500">
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center p-6 text-gray-500">
                            No transactions yet. Click 'Add Expense' to get started.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


// --- Main App Component ---

export default function Dashboard() {
    const [currentPage, setCurrentPage] = useState('home');

    const NavLink = ({ page, children }) => {
        const isActive = currentPage === page;
        return (
            <button
                onClick={() => setCurrentPage(page)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
                {children}
            </button>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-white p-6 border-b md:border-r border-gray-200">
                    <div className="flex items-center gap-2 mb-8">
                        <Wallet className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-2xl font-bold text-gray-800">MyWallet</h1>
                    </div>
                    <nav className="flex flex-row md:flex-col gap-2">
                         <NavLink page="home">
                            <LayoutDashboard className="w-5 h-5" />
                            <span>Dashboard</span>
                        </NavLink>
                         <NavLink page="expenses">
                             <ReceiptText className="w-5 h-5" />
                             <span>Expenses</span>
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 sm:p-8 lg:p-10">
                    {currentPage === 'home' && <HomePage />}
                    {currentPage === 'expenses' && <ExpensesPage />}
                </main>
            </div>
        </div>
    );
}
