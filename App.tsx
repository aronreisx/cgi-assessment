import React from 'react';
import { StatusBar, View } from 'react-native';

import { Routes } from './src/routes/app.routes'

import { MainContextProvider } from './src/context/MainContext'

export default function App() {
  return (
    <>
      <MainContextProvider>
        <Routes/>
      </MainContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
