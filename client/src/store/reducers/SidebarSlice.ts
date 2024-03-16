import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lsConstants } from "@/configs/shared/constants";

interface ISidebarState {
  isSideBarOpen: boolean,
  titleName: string,
  titleId: string,
  activeLink: string,
  sidebarMenus: {
    home: true,
    users: true,
    settings: true,
  }
}

const initialState: ISidebarState = {
  isSideBarOpen: true,
  titleName: '',
  titleId: '',
  activeLink: '',
  sidebarMenus: {
    home: true,
    users: true,
    settings: true,
  }
}
export const sidebarSlice = createSlice({
  name: 'sidebarState',
  initialState,
  reducers: {
    openSidebar(state, action: PayloadAction<boolean>) {
      state.isSideBarOpen = true;
    },
    closeSidebar(state, action: PayloadAction<boolean>) {
      state.isSideBarOpen = false;
    },
    toggleSidebar(state, action: PayloadAction<boolean>) {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    openAllSideBarMenus(state) {
      Object.keys(state.sidebarMenus).forEach(i => {
        state.sidebarMenus[i as keyof typeof state.sidebarMenus] = true;
      });
      localStorage.setItem(lsConstants.SIDE_BAR_MENUS, JSON.stringify(state.sidebarMenus));
    },
    toggleSideBarMenu(state, action: PayloadAction<string>) {
      const oldObj = localStorage.getItem(lsConstants.SIDE_BAR_MENUS) ? JSON.parse(localStorage.getItem(lsConstants.SIDE_BAR_MENUS) as string) : {};
      localStorage.setItem(lsConstants.SIDE_BAR_MENUS, JSON.stringify({...oldObj, [action.payload]: oldObj ? !oldObj[action.payload] : true}));
      state.sidebarMenus = {...oldObj, [action.payload]: oldObj ? !oldObj[action.payload] : true};
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload;
    },
    toggleSidebarByValue(state, action: PayloadAction<boolean>) {
      state.isSideBarOpen = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.titleName = action.payload;
    },
    setId(state, action: PayloadAction<string>) {
      state.titleId = action.payload;
    }
  }
});

export default sidebarSlice.reducer;