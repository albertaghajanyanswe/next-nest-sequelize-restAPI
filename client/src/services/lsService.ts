import { lsConstants } from "@/configs/shared/constants";

const isLoggedIn = () => localStorage.getItem(lsConstants.CURRENT_USER) ? JSON.parse(localStorage.getItem(lsConstants.CURRENT_USER)!) : false;
const getCurrentUser = () => localStorage.getItem(lsConstants.CURRENT_USER) ? JSON.parse(localStorage.getItem(lsConstants.CURRENT_USER)!) : false;

const logOut = () => {
  localStorage.removeItem(lsConstants.CURRENT_USER);
}

export { isLoggedIn, logOut, getCurrentUser };