// App.jsx
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';

function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (name.trim()) {
      localStorage.setItem('username', name);
      navigate('/food');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome!</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleClick}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Check the Classes of Food
        </button>
      </div>
    </div>
  );
}

function FoodClasses() {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username');
    if (storedName) setName(storedName);
  }, []);

  const foodData = [
    { class: 'Carbohydrates', examples: 'Rice, Bread, Pasta' },
    { class: 'Proteins', examples: 'Meat, Fish, Eggs' },
    { class: 'Fats and Oils', examples: 'Butter, Oil, Avocado' },
    { class: 'Vitamins', examples: 'Fruits, Vegetables' },
    { class: 'Minerals', examples: 'Milk, Cheese, Nuts' },
    { class: 'Fiber', examples: 'Whole grains, Beans' },
    { class: 'Water', examples: 'Drinking water, Juices' },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-yellow-100 to-red-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {name}! 👋</h1>
      <h2 className="text-xl font-semibold mb-4 text-center"> Food Classes and Examples</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Examples</th>
            </tr>
          </thead>
          <tbody>
            {foodData.map((item, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-3">{item.class}</td>
                <td className="p-3">{item.examples}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodClasses />} />
      </Routes>
    </Router>
  );
}
