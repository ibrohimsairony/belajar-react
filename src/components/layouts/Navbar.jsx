import { Outlet, useOutletContext } from "react-router-dom";
import Button from "../elements/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ToggleDarkMode from "../elements/ToggleDarkMode";
import { useTotalPrice } from "../../contexts/TotalPrice";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.data);
  const [totalCart, setTotalCart] = useState(0);
  const { total } = useTotalPrice();
  useEffect(() => {
    const result = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(result);
  }, [cart]);

  const { username } = useOutletContext();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <ToggleDarkMode />
      <div className="flex items-center justify-end w-full h-20 px-10 text-white bg-blue-400 ">
        <span className="">{username && username}</span>
        <Button
          classname="ml-5 transition-colors bg-red-500 hover:bg-red-600 hover:cursor-pointer"
          onClick={handleLogOut}
        >
          LogOut
        </Button>
        <div className="flex items-center justify-center h-10 px-3 ml-3 mr-14 rounded-lg bg-sky-900 ">
          <p className="font-light text-md ">{`${totalCart} | ${String(
            total
          ).substring(0, 7)}`}</p>
        </div>
      </div>
      <Outlet context={{ username }} />
    </>
  );
}
