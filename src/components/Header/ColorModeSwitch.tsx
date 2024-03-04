import {useEffect, useState} from "react";

function ColorModeSwitch() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.bsTheme = newTheme;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', theme);
    }
    document.body.dataset.bsTheme = theme;
  }, [theme]);

  return (
    <>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={theme === 'dark'} onChange={toggleTheme}/>
      <label className="form-check-label text-nowrap" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
    </div>
    </>
  )
}

export default ColorModeSwitch;
