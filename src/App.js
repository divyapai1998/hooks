import logo from './logo.svg';
import './App.css';
import  Comp1 from './Comp1';
import  Comp2 from './Comp2'
import Usest from './Usest';
import UsestPrevState from './UsestPrevState';
import UsestObj from './UsestObj';
import UsestArray from './UsestArray';
import Useefct from './Useefct';
import UsefectCON from './UsefectCON';
import UsefctONCE from './UsefctONCE';
import UseffctUNMOUNT from './UseffctUNMOUNT';
import UseffctMists from './UseffctMists';
import UseffctfetchData from './UseffctfetchData';
import ContextC from './ContextC';
import { ContextProvider } from './UserContext';
import React, { Component } from 'react'
import UseRedceCounter from './UseRedceCounter';

const UserContext = React.createContext();
const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <Comp1  name= 'Divya'/>
      <Comp2 />
      <Usest />
      <UsestPrevState />
      <UsestObj />
      <UsestArray /> */}
      {/* <Useefct /> */}
      {/* < UsefectCON /> */}
      {/* <UsefctONCE /> */}
      {/* <UseffctUNMOUNT /> */}
      {/* <UseffctMists /> */}
      {/* <UseffctfetchData /> */}
      {/* <ContextProvider value = 'World'><ContextC/></ContextProvider> */}
      {/* <UserContext.Provider value = 'Hey'>
        <ChannelContext.Provider value = 'Channel Context Hey'>
        <ContextC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <UseRedceCounter/>
      
    </div>
  );
}
export {UserContext,ChannelContext}
export default App;
