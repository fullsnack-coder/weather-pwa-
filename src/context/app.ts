import React, { SetStateAction, Dispatch } from 'react';

type Place = {
  placeName: string;
  uuid: string;
};

type User = {
  uuid?: string;
  username: string;
  userImage: string;
  userPlaces: Place[];
  userDescription: string;
};

type Weather = {
  weather: number;
  icon: string;
  place: string;
  tempMin: number;
  tempMax: number;
};

interface AppContextInterface {
  darkMode?: boolean;
  user?: User;
  coords: {
    lat: number;
    lng: number;
  };
  toggleTheme?: any;
  activeNavbar?: boolean;
  toggleNavbar?: any;
  setCoords: Dispatch<SetStateAction<{ lat: number; lng: number }>>;
  setUser?: any;
  weather: Weather;
  setWeather: Dispatch<SetStateAction<Weather>>;
  appStatus: {
    loading: boolean;
    error: { ok: boolean };
  };
  setAppStatus: any;
}

export const appContext = React.createContext<AppContextInterface>({
  setCoords: () => {},
  coords: {
    lat: 0,
    lng: 1,
  },
  weather: {
    weather: 0,
    icon: '',
    place: '',
    tempMin: 0,
    tempMax: 0,
  },
  setWeather: () => {},
  appStatus: {
    loading: true,
    error: { ok: true },
  },
  setAppStatus: () => {},
});

export const AppContextProvider = appContext.Provider;
