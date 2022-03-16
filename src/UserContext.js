import React, { Component } from 'react'

const userContext  = React.createContext();

const ContextProvider = userContext.Provider
const ContextConsumer = userContext.Consumer

export  {ContextProvider, ContextConsumer}

