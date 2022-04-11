import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../services/ui/theme-context';

const ThemeToggler = ({ color }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className=" dark:text-white text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`${color} dark:text-gray-400 text-2xl cursor-pointer`}
        />
      )}
    </div>
  );
};

export default ThemeToggler;
