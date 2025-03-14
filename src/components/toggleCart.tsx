import { useState } from "react";

export default function useToggle() {
  const [isToggle, setIsToggle] = useState(false);
  const setToggleOn = () => {
    setIsToggle(true);
  };
  const setToggleOff = () => {
    setIsToggle(false);
  };
  return { isToggle, setToggleOn, setToggleOff };
}
