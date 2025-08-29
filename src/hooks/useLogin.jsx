import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
      setIsLoggedIn(true);
      console.log("masuk");
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  }, []);
  console.log(isLoggedIn);
  return { username, isLoggedIn, isLoading };
};
