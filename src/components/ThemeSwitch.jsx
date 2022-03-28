import React, { useEffect, useState } from "react";

export const ThemeSwitch = ({ settheme }) => {
  const [toggle, setToggle] = useState(true);
  const isDarkToggleClass = "transform translate-x-5 bg-gray-500";

  const handleToggle = () => {
    localStorage.setItem("isDark", !toggle);
    setToggle(!toggle);
    settheme(!toggle);
  };

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("isDark")) || true;

    if (isDark) {
      setToggle(true);
      settheme(true);
    } else {
      setToggle(false);
      settheme(false);
    }
  }, []);

  return (
    <React.Fragment>
      <section className='flex items-center mt-7'>
        <div
          className='flex items-center w-12 h-6 p-1 mx-2 bg-gray-400 rounded-full cursor-pointer md:w-14 md:h-7'
          onClick={handleToggle}
        >
          <div
            className={
              "bg-gray-700 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? isDarkToggleClass : null)
            }
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
};
