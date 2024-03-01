import React from "react";
import { FavoriteProductDto, Product, ProductIntendedForEnum, ProductProductStateEnum } from "../../generated/openapi";

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export type iLogin = {
  email: string;
  password: string;
}

export type iLoginGuest = {
  nickName: string;
  password: string;
}

export type iRegistration = {
  firstName: string;
  lastName: string;
  email: string;
  nickName: string;
  password: string;
  phone: string;
  switchGuestAccount: boolean;
}

export type iRegistrationGuest = {
  nickName: string;
  password: string;
}

export type iInput = {
  id: string,
  name: string,
  label: string,
  type: string,
  variant: string,
  icon: React.ReactNode,
}

export type iInputs = {
  inputs: iInput[]
}

export type iTableField = {
  id: string;
  label: string;
  type: string;
  component?: any;
  sortable?: boolean;
  width?: string;
  cellPaddingRight?: string;
  cellPaddingLeft?: string;
  show?: ({ currentUser }: { currentUser: any }) => boolean;
  orderField?: string;
  textAlign?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
}

export interface iTableSources<Row> {
  data: Row[];
  count: number;
}

export interface iSort {
  field: string;
  order: 'asc' | 'desc' | '';
}

export interface iFilter {
  [key: string]: any
}

export interface iSearch {
  value: string;
  fields: string[];
}

export interface iFilterParams {
  params: {
    sort: iSort,
    filter: iFilter,
    limit: number,
    skip: number,
    search?: iSearch
  }
}

export interface iFilterField {
  id: string
  label: string
  priority: number
  size?: 'small' | 'medium' | undefined
  disabled?: boolean
}

export interface iFilterTextField extends iFilterField {
  type: "text";
  maxWidth?: number;
  minWidth?: number;
}

export interface iFilterSelectField extends iFilterField {
  placeholder?: string;
  type: "select";
  options?: readonly any[] | (() => Promise<any>) | any; // for static options
  optionsCallback?: any; // for options to get from api
  adapterCallback: (data: any) => any, // for analyzing fetched data
  sortBySelected: boolean;
  multiple: boolean;
  showResetOption?: boolean;
  selectAll?: boolean;
  selectAllLabel?: string;
  insteadNone?: string;
  sxPaperProps?: any;
  maxItemCount?: number;
  currentUserOption?: boolean;
  currentUserOptionLbl?: string;
}

export interface iFilterSortField extends iFilterField {
  placeholder?: string;
  type: "sortField";
  options?: readonly any[] | (() => Promise<any>) | any; // for static options
  optionsCallback?: any; // for options to get from api
  adapterCallback: (data: any) => any, // for analyzing fetched data
  multiple?: boolean;
  showResetOption?: boolean;
  sxPaperProps?: any;
  maxItemCount?: number;
  insteadNone?: JSX.Element;
}

export interface iFilterDatePickerField extends iFilterField {
  placeholder: string;
  type: "date-time-picker";
  withoutLabel: boolean;
  maxWidth?: number;
  minWidth?: number;
  iconPosition?: string;
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
  // views?: readonly CalendarOrClockPickerView[] | undefined;
  views?: any;
  inputFormat?: string | undefined;
}

export enum UserRole {
  Guest = 'GUEST',
  User = 'USER',
  Admin = 'ADMIN',
}

export interface iAccountDetails {
  image: string;
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  phone: string;
}

export type FileData = {
  uuid: string,
  name: string,
  size: number,
  timestamp: string
}

export interface iCreateProduct {
  name: string;
  description: string;
  otherInfo: string;
  price: string;
  currency: string;
  province: string;
  city: string;
  address: string;
  categoryId: number;
  intendedFor: ProductIntendedForEnum;
  productState: ProductProductStateEnum;
}

// todo add this type in BE
export type ProductWithImages = Pick<Product, keyof Product> & {
  productImage: {
    id: number;
    name: string;
    productId: number;
  }[];
  user: {
    favoriteProducts: FavoriteProductDto[]
  }
};