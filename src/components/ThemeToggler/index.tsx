import { FiSun, FiMoon } from 'react-icons/fi';

import { useAppTheme } from '@hooks';

const ThemeToggler = () => {
  const { currentTheme, toggleTheme } = useAppTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      {currentTheme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggler;
