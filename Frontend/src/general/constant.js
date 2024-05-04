import { useContext } from "react";
import AppContext from "../AppContext";

export const useAdminAuth = () => {
  const { isAdmin, login } = window.localStorage;
  return login && isAdmin;
};

export const useUserAuth = () => {
  const { isAdmin, login } = window.localStorage;
  return login && (isAdmin=="false");
};
