import { HiMoon, HiSun } from 'react-icons/hi';

import { useAppTheme } from '@hooks';

const ThemeToggler = () => {
  const { currentTheme, toggleTheme } = useAppTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      {currentTheme === 'light' ? <HiMoon size={20} /> : <HiSun size={20} />}
    </button>
  );
};

export default ThemeToggler;
