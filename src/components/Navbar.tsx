import React, { useState } from 'react';
import { Search, Droplets } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { waterBodies } from '../data/waterBodies';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const filteredBodies = waterBodies.filter(body =>
    body.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (name: string) => {
    navigate(`/lake/${encodeURIComponent(name.toLowerCase())}`);
    setShowDropdown(false);
    setSearchQuery('');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Nadinetra</span>
          </div>
          
          <div className="relative flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
                placeholder="Search water bodies..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            
            {showDropdown && searchQuery && (
              <div className="absolute w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                {filteredBodies.map(body => (
                  <div
                    key={body.id}
                    className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white transition-colors duration-200"
                    onClick={() => handleSelect(body.name)}
                  >
                    {body.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}