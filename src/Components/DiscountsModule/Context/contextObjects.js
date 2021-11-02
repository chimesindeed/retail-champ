import React from 'react'

// INITIALIZATION OF CONTEXT OBJECTS - FOR HEADERS
export const CurrentUser = React.createContext({});
export const LoginBarToggle = React.createContext('');

export const StoreIdContext = React.createContext('');
export const StoreAddressContext = React.createContext('');
export const StorePhoneContext = React.createContext('');
export const StoreHoursContext = React.createContext('');
export const StoreExchangePolicyContext = React.createContext('');

// INITIALIZATION OF CONTEXT OBJECTS - FOR PRICES
export const ChildrensPriceContext = React.createContext('');
export const HardcoverPriceContext = React.createContext('');
export const SoftcoverPriceContext = React.createContext('');
export const AlbumsPriceContext = React.createContext('');
export const CdsPriceContext = React.createContext('');
export const DvdsPriceContext = React.createContext('');
export const SetsPriceContext = React.createContext('');
export const VHSPriceContext = React.createContext('');