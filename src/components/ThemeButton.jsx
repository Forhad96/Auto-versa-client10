import useDakMode from "./hooks/UseDarkMode";

function ThemeButton() {
  const { toggleTheme } = useDakMode();

  return <button onClick={toggleTheme}>Change Theme</button>;
}

export default ThemeButton