import React from 'react'
import ContextF from './ContextF'
import { UserContext, ChannelContext } from './App';
import { useContext } from 'react'




const ContextE = () => {
    const UserCont = useContext(UserContext);
const ChannelCont = useContext(ChannelContext);
  return (
    <div>{UserCont} --- {ChannelCont}</div>
  )
  // THIS IS HOW USECONTEXT HOOK SIMPLIFIES THE USAGE OF MULTIPLE CONTEXT USAGE.
}

export default ContextE