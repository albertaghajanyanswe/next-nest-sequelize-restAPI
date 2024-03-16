import { lsConstants } from "@/configs/shared/constants";

const isLoggedIn = () => typeof window !== "undefined" && localStorage.getItem(lsConstants.CURRENT_USER) ? JSON.parse(localStorage.getItem(lsConstants.CURRENT_USER)!) : false;
const getCurrentUser = () => typeof window !== "undefined" && localStorage.getItem(lsConstants.CURRENT_USER) ? JSON.parse(localStorage.getItem(lsConstants.CURRENT_USER)!) : false;

const logOut = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(lsConstants.CURRENT_USER);
  }
}

export { isLoggedIn, logOut, getCurrentUser };