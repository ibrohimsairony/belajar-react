import { useContext } from "react";
import { DarkModeContext } from "../../../contexts/DarkMode";
import Button from "../Button";
import Moon from "./moon";
import Sun from "./sun";

export default function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  return (
    <Button
      classname=" h-10 bg-amber-400  absolute top-5 right-3"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </Button>
  );
}
